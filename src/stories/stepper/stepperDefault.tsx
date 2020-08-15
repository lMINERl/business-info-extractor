import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/CheckCircleRounded';
import CancelIcon from '@material-ui/icons/CancelRounded';
import { Grid } from '@material-ui/core';

const StepperDefault = (props: {
  content?: {
    steps?: { message: string; description?: string; icon?: any }[];
    stepComponents?: JSX.Element[];
    defaultStep?: number;
  };
  shape?: {
    finishedIcon?: any;
    unfinishedIcon?: any;
  };
  stepComplete?: boolean;
  shouldBack?: boolean;
  shouldSkip?: boolean;
  shouldReset?: boolean;
}) => {
  const shape = props.shape ?? { unfinishedIcon: <CancelIcon />, finishedIcon: <CheckIcon /> };
  const content = props.content ?? { steps: [], stepComponents: [], defaultStep: 0 };
  const steps = content.steps ?? [];
  const stepComponents = content.stepComponents ?? [];
  const shouldBack = props.shouldBack ?? false;
  const shouldReset = props.shouldReset ?? false;
  const shouldSkip = props.shouldSkip ?? false;
  const stepComplete = props.stepComplete ?? false;
  const [activeStep, setActiveStep] = React.useState(content.defaultStep ?? 0);

  const [skipedSteps, setSkipedSteps] = React.useState<number[]>([]);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);

  const backButton = React.useMemo(() => {
    return shouldBack ? (
      <Button
        disabled={activeStep === 0}
        onClick={() => {
          setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }}
      >
        Back
      </Button>
    ) : (
      <React.Fragment></React.Fragment>
    );
  }, [shouldBack, activeStep]);

  const nextButton = React.useMemo(() => {
    return stepComplete ? (
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (!stepComplete) return;
          if (!completedSteps.includes(activeStep)) {
            setCompletedSteps([...completedSteps, activeStep]);
          }
          if (skipedSteps.includes(activeStep)) {
            const index = skipedSteps.indexOf(activeStep);
            setSkipedSteps([].concat(skipedSteps.slice(0, index) as any, skipedSteps.slice(index + 1, skipedSteps.length) as any));
          }
          setActiveStep((prevActiveStep) => {
            if (completedSteps.includes(prevActiveStep + 1)) {
              if (skipedSteps.length) {
                return skipedSteps[0];
              }
            }
            return prevActiveStep + 1 === steps.length ? (skipedSteps.length ? skipedSteps[0] : 0) : prevActiveStep + 1;
          });
        }}
      >
        {activeStep === steps.length - 1 && skipedSteps.length === 0 ? 'Finish' : 'Next'}
      </Button>
    ) : (
      <React.Fragment></React.Fragment>
    );
  }, [activeStep, steps.length, stepComplete, skipedSteps, completedSteps]);

  const resetButton = React.useMemo(() => {
    return shouldReset ? (
      <Button
        onClick={() => {
          setActiveStep(0);
          setCompletedSteps([]);
          setSkipedSteps([]);
        }}
      >
        Reset
      </Button>
    ) : (
      <React.Fragment></React.Fragment>
    );
  }, [shouldReset]);

  const skipButton = React.useMemo(() => {
    return shouldSkip ? (
      <Button
        onClick={() => {
          if (!skipedSteps.includes(activeStep)) {
            setSkipedSteps([...skipedSteps, activeStep]);
          }
          setActiveStep((prevActiveStep) => {
            if (completedSteps.includes(prevActiveStep + 1)) {
              if (skipedSteps.length) {
                return skipedSteps[0];
              }
            }
            return prevActiveStep + 1 === steps.length ? (skipedSteps.length ? skipedSteps[0] : 0) : prevActiveStep + 1;
          });
        }}
      >
        Skip
      </Button>
    ) : (
      <React.Fragment></React.Fragment>
    );
  }, [skipedSteps, activeStep, completedSteps, shouldSkip]);

  const stepComponent = React.useMemo(() => {
    return stepComponents.length ? stepComponents[activeStep] ?? <div></div> : <div></div>;
  }, [activeStep, stepComponents]);

  return (
    <div
      style={{
        width: '100%'
      }}
    >
      <div style={{ margin: '1rem' }}>{stepComponent}</div>
      <Stepper activeStep={activeStep} style={{ margin: '0 auto',textAlign:'center' }} className="MuiStepLabel-alternativeLabel" nonLinear>
        {steps.map((label, index) => (
          <Step key={label.message}>
            {label.icon ? (
              <StepLabel icon={label.icon}>{label.message}</StepLabel>
            ) : (
              <StepLabel
                className="MuiStepLabel-alternativeLabel"
                translate="yes"
                icon={completedSteps.includes(index) ? shape.finishedIcon : shape.unfinishedIcon}
              >
                {label.message}
              </StepLabel>
            )}
          </Step>
        ))}
      </Stepper>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '50%', margin: '0 auto', textAlign: 'center' }}>
        {completedSteps.length == steps.length ? (
          <React.Fragment>{resetButton}</React.Fragment>
        ) : (
          <React.Fragment>
            <div style={{ margin: '0 auto', display: 'inline-flex', justifyContent: 'space-between', width: '9rem' }}>
              {backButton}
              {nextButton}
              {!completedSteps.includes(activeStep) ? skipButton : null}
            </div>
            <Typography style={{ margin: '1px 1rem 1px 2px' }}>{steps[activeStep].description ?? ''}</Typography>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default StepperDefault;

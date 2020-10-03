import React, { useState } from "react";
import { Step } from "semantic-ui-react";
import {
  CreatePostAdDetails,
  CreatePostAdPhotos,
  CreatePostAdFinish,
} from "../../components";
import "./create-post-page.css";

const STEPS = {
  AD_DETAILS: "Ad Details",
  PHOTOS: "Photos",
  FINISH: "Finish",
};

const visited = {
  AD_DETAILS: true,
  PHOTOS: false,
  FINISH: false,
};

const CreatePostPage = () => {
  const [activeStep, setActiveStep] = useState(STEPS.AD_DETAILS);
  return (
    <div className="ak-create-post-page body-margin">
      <div className="ak-create-post-container">
        <Step.Group unstackable>
          {Object.keys(STEPS).map((step) => (
            <Step active={activeStep === STEPS[step]} disabled={!visited[step]}>
              <Step.Content>
                <Step.Title>{STEPS[step]}</Step.Title>
              </Step.Content>
            </Step>
          ))}
        </Step.Group>
        <div className="ak-create-post-step-container">
          {activeStep === STEPS.AD_DETAILS && (
            <CreatePostAdDetails
              next={() => {
                visited.PHOTOS = true;
                setActiveStep(STEPS.PHOTOS);
              }}
            />
          )}
          {activeStep === STEPS.PHOTOS && (
            <CreatePostAdPhotos
              next={() => {
                visited.FINISH = true;
                setActiveStep(STEPS.FINISH);
              }}
              prev={() => {
                setActiveStep(STEPS.AD_DETAILS);
              }}
            />
          )}
          {activeStep === STEPS.FINISH && (
            <CreatePostAdFinish
              prev={() => {
                setActiveStep(STEPS.PHOTOS);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
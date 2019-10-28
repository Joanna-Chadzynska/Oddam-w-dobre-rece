import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormInfoBanner, ErrorInfoForm } from '../../Layouts';

const StepTwo = ({
  bags,
  currentStep,
  handleChange,
  previousButton,
  nextButton,
}) => {
  const { t } = useTranslation();

  const [isArrowUp, setArrowUp] = useState(false);

  const changeArrow = () => {
    setArrowUp(!isArrowUp);
  };

  if (currentStep !== 2) {
    return null;
  }

  return (
    <div className="form__step form__wrapper">
      <FormInfoBanner>{t('form.info.stepTwo')}</FormInfoBanner>
      <div className="form__form">
        <p>
          {t('form.info.step')} {currentStep}/4
        </p>
        <br />
        {!bags ? (
          <ErrorInfoForm>{t('form.stepTwo.msgErr-bags')}</ErrorInfoForm>
        ) : (
          <br />
        )}
        <div className="form__group">
          <h1>{t('form.stepTwo.mainTitle')}:</h1>
          <div className="form__step-two select">
            <label>{t('form.stepTwo.label-select')}:</label>
            <select
              onClick={changeArrow}
              className={isArrowUp ? 'arrowUp' : null}
              onChange={handleChange}
              name="step-two"
              value={bags}
            >
              <option hidden>— {t('form.stepTwo.select')} —</option>
              <option value="1" className="option-style">
                1
              </option>
              <option value="2" className="option-style">
                2
              </option>
              <option value="3" className="option-style">
                3
              </option>
              <option value="4" className="option-style">
                4
              </option>
              <option value="5" className="option-style">
                5
              </option>
            </select>
          </div>
        </div>

        {previousButton()}
        {nextButton()}
      </div>
    </div>
  );
};

export default StepTwo;

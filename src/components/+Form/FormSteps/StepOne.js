import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormInfoBanner, ErrorInfoForm } from '../../Layouts';

const StepOne = ({ currentStep, handleChange, nextButton, type }) => {
  const { t } = useTranslation();

  if (currentStep !== 1) {
    return null;
  }

  return (
    <div className="form__step form__wrapper">
      <FormInfoBanner>{t('form.info.stepOne')}</FormInfoBanner>

      <div className="form__form">
        <p>
          {t('form.info.step')} {currentStep}/4
        </p>
        <br />
        {!type ? (
          <ErrorInfoForm>{t('form.stepOne.msgErr-select')}</ErrorInfoForm>
        ) : (
          <br />
        )}
        <div className="form__group">
          <h1>{t('form.stepOne.mainTitle')}: </h1>

          <div className="form__step-one">
            <div className="form__step-one--input">
              <input
                type="radio"
                name="step-one"
                id="clothes-ok"
                value="ubrania w dobrym stanie"
                onChange={handleChange}
                checked={type === 'ubrania w dobrym stanie'}
              />
              <label htmlFor="clothes-ok">{t('form.stepOne.label-1')}</label>
            </div>
            <div className="form__step-one--input">
              <input
                type="radio"
                name="step-one"
                id="clothes-trash"
                value="ubrania w złym stanie"
                onChange={handleChange}
                checked={type === 'ubrania w złym stanie'}
              />
              <label htmlFor="clothes-trash">{t('form.stepOne.label-2')}</label>
            </div>
            <div className="form__step-one--input">
              <input
                type="radio"
                name="step-one"
                id="toys"
                value="zabawki"
                onChange={handleChange}
                checked={type === 'zabawki'}
              />
              <label htmlFor="toys">{t('form.stepOne.label-3')}</label>
            </div>
            <div className="form__step-one--input">
              <input
                type="radio"
                name="step-one"
                id="books"
                value="książki"
                onChange={handleChange}
                checked={type === 'książki'}
              />
              <label htmlFor="books">{t('form.stepOne.label-4')}</label>
            </div>
            <div className="form__step-one--input">
              <input
                type="radio"
                name="step-one"
                id="other"
                value="inne"
                onChange={handleChange}
                checked={type === 'inne'}
              />
              <label htmlFor="other">{t('form.stepOne.label-5')}</label>
            </div>
          </div>
        </div>

        {nextButton()}
      </div>
    </div>
  );
};

export default StepOne;

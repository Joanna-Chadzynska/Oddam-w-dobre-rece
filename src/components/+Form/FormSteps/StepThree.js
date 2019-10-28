import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormInfoBanner, ErrorInfoForm } from '../../Layouts';

const StepThree = ({
  currentStep,
  handleChange,
  nextButton,
  previousButton,
  localization,
  helpGroups,
  localizationSpecific,
}) => {
  const { t } = useTranslation();

  const [isArrowUp, setArrowUp] = useState(false);

  const changeArrow = () => {
    setArrowUp(!isArrowUp);
  };

  if (currentStep !== 3) {
    return null;
  }

  const errorsList = () => {
    if (!localization && !localizationSpecific) {
      return (
        <ErrorInfoForm>{t('form.stepThree.msgErr-location')}</ErrorInfoForm>
      );
    }
    if (helpGroups.length <= 0) {
      return (
        <ErrorInfoForm>{t('form.stepThree.msgErr-helpGroup')}</ErrorInfoForm>
      );
    }
    return <br />;
  };

  return (
    <div className="form__step form__wrapper">
      <FormInfoBanner>{t('form.info.stepThree')}</FormInfoBanner>

      <div className="form__form">
        <p>
          {t('form.info.step')} {currentStep}/4
        </p>
        <br />
        {errorsList()}
        <div className="form__group">
          <h1>{t('form.stepThree.mainTitle')}</h1>

          <div className="form__step-three">
            <div className="form__location select">
              <select
                onClick={changeArrow}
                className={isArrowUp ? 'arrowUp' : null}
                name="localization"
                onChange={handleChange}
                value={localization}
              >
                <option hidden>— {t('form.stepTwo.select')} —</option>
                <option value="Poznań">Poznań</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Katowice">Katowice</option>
              </select>
            </div>
            <div className="form__help-groups">
              <p>{t('form.stepThree.helpTitle')}</p>
              <input
                type="checkbox"
                name="helpGroups"
                id="kids"
                value="dzieciom"
                onChange={handleChange}
                checked={!!helpGroups.includes('dzieciom')}
              />
              <label htmlFor="kids">{t('form.stepThree.label-1')}</label>
              <input
                type="checkbox"
                name="helpGroups"
                id="single-moms"
                value="samotnym matkom"
                onChange={handleChange}
                checked={!!helpGroups.includes('samotnym matkom')}
              />
              <label htmlFor="single-moms">{t('form.stepThree.label-2')}</label>
              <input
                type="checkbox"
                name="helpGroups"
                id="homeless"
                value="bezdomnym"
                onChange={handleChange}
                checked={!!helpGroups.includes('bezdomnym')}
              />
              <label htmlFor="homeless">{t('form.stepThree.label-3')}</label>
              <input
                type="checkbox"
                name="helpGroups"
                id="disabled"
                value="niepełnosprawnym"
                onChange={handleChange}
                checked={!!helpGroups.includes('niepełnosprawnym')}
              />
              <label htmlFor="disabled">{t('form.stepThree.label-4')}</label>
              <input
                type="checkbox"
                name="helpGroups"
                id="seniors"
                value="osobom starszym"
                onChange={handleChange}
                checked={!!helpGroups.includes('osobom starszym')}
              />
              <label htmlFor="seniors">{t('form.stepThree.label-5')}</label>
            </div>
            <div className="form__localizaton-specific">
              <p>{t('form.stepThree.specificLocalTitle')}</p>
              <input
                type="text"
                name="localizationSpecific"
                value={localizationSpecific}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {previousButton()}
        {nextButton()}
      </div>
    </div>
  );
};

export default StepThree;

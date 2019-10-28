import React from 'react';
import { useTranslation } from 'react-i18next';

const StepsDiamonds = () => {
  const { t } = useTranslation();

  return (
    <div className="form__mainSteps">
      <div className="form__diamond">
        <div className="form__diamondItem">
          <h1>1</h1>
          <span>
            {t('form.header.simpleSteps.one-1')} <br />
            {t('form.header.simpleSteps.one-2')}
          </span>
        </div>
      </div>
      <div className="form__diamond">
        <div className="form__diamondItem">
          <h1>2</h1>
          <span>
            {t('form.header.simpleSteps.two-1')} <br />
            {t('form.header.simpleSteps.two-2')}
          </span>
        </div>
      </div>
      <div className="form__diamond">
        <div className="form__diamondItem">
          <h1>3</h1>
          <span>
            {t('form.header.simpleSteps.three-1')} <br />
            {t('form.header.simpleSteps.three-2')}
          </span>
        </div>
      </div>
      <div className="form__diamond">
        <div className="form__diamondItem">
          <h1>4</h1>
          <span>
            {t('form.header.simpleSteps.four-1')} <br />
            {t('form.header.simpleSteps.four-2')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepsDiamonds;

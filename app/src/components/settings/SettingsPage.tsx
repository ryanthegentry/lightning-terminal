import React, { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store';
import { styled } from 'components/theme';
import BalanceSettings from './BalanceSettings';
import GeneralSettings from './GeneralSettings';
import UnitSettings from './UnitSettings';

const Styled = {
  Wrapper: styled.div`
    padding: 40px 0;
  `,
};

const SettingsPage: React.FC = () => {
  const { uiStore } = useStore();

  let cmp: ReactNode;
  switch (uiStore.selectedSetting) {
    case 'unit':
      cmp = <UnitSettings />;
      break;
    case 'balance':
      cmp = <BalanceSettings />;
      break;
    case 'general':
    default:
      cmp = <GeneralSettings />;
  }

  const { Wrapper } = Styled;
  return <Wrapper>{cmp}</Wrapper>;
};

export default observer(SettingsPage);
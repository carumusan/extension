// Copyright 2019-2020 @polkadot/extension-ui authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ThemeProps } from '../types';

import styled from 'styled-components';

export default styled.div(({ theme }: ThemeProps) => `
  width: 100%;
  margin-bottom: 8px;
  margin-top: 18px;
  font-weight: 800;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${theme.textColor};
  opacity: 0.65;
`);

import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { pallete } from '../../lib/style/pallete';

const BottomWarrper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  margin-bottom: 80px;
`;

const Btn = styled(Button)`
  width: 310px;
  height: 54px;
  color: ${pallete.white};
  background: ${pallete.orange};
  border: none;
  border-radius: 14px;
  text-shadow: none;

  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  text-align: center;

  &:hover {
    background: ${pallete.orange};
  }

  &:active {
    background: ${pallete.orange};
  }

  &:focus {
    background: ${pallete.orange};
  }
`;

const BottomCol = ({ buttonType, loading, buttonText, disabled }) => {
  return (
    <BottomWarrper>
      <Btn type="primary" size="large" htmlType={buttonType} loading={loading} disabled={disabled}>
        {buttonText}
      </Btn>
    </BottomWarrper>
  );
};

BottomCol.prototype = {
  buttonType: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default BottomCol;

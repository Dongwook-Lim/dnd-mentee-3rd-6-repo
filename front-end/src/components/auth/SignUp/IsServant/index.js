import React from 'react';
import PropTpyes from 'prop-types';
import { Form } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ImageBox, Wrapper, Title, SubTitle, DotsIndicator, SliderWrapper } from './styles';
import BottomCol from '../../../common/BottomCol';
import Margin from '../../../common/Margin';

const IsServantForm = ({ name, isServant, setIsServant, onSubmitSignUp }) => {
  return (
    <Form onFinish={onSubmitSignUp}>
      <Margin top="92px" bottom="35px">
        <Wrapper>
          <Title>{name}님은 어떤 집사인가요?</Title>
          <SliderWrapper>
            <Slider
              dots={false}
              infinite={false}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={false}
              beforeChange={(current, next) => {
                const nextBool = next === 0;
                setIsServant(nextBool);
              }}
            >
              <ImageBox choice={isServant}>
                <img className="dot1-img" src="/images/isServant/1.svg" alt="집사" />
              </ImageBox>
              <ImageBox choice={isServant}>
                <img className="dot2-img" src="/images/isServant/2.svg" alt="랜선집사" />
              </ImageBox>
            </Slider>
          </SliderWrapper>
          <SubTitle>
            {!isServant ? '마음으로 모시는 랜선집사에요' : '냥님을 모시는 집사에요'}
          </SubTitle>
          <DotsIndicator choice={isServant}>
            <span className="dot1" />
            <span className="dot2" />
          </DotsIndicator>
        </Wrapper>
      </Margin>
      <BottomCol buttonType="submit" buttonText="다음으로" />
    </Form>
  );
};

IsServantForm.prototype = {
  name: PropTpyes.string.isRequired,
  isServant: PropTpyes.bool.isRequired,
  setIsServant: PropTpyes.func.isRequired,
  onSubmitSignUp: PropTpyes.func.isRequired,
};

export default IsServantForm;

import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play Dice Game</h2>
      <div className="text">
        <p>Select Any Number</p>

        <p>Click On Dice Image</p>
        <p>
          After Click on Dice if Selected Number is equal to the dice number you
          will get same point as dice{""}
        </p>
        <p>if You get wrong guess then 2 points will be deducted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  background-color: #fbf1f1;
  padding: 20px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
    /* font-weight: bold; */
  }
  .text {
    margin-top: 24px;
  }
`;

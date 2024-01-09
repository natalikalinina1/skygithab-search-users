import * as S from './Skeletons.style';
import React from 'react'

export const Skeleton = () => {
  return (
    <>
      {Array(13)
        .fill(null)
        .map((item, index) => {
          return (
            <S.SkeletonWrapper key={index}>
              < S.SkeletonOverlay/>
              <S.SkeletonTitle/>
            </S.SkeletonWrapper>
          );
        })}
    </>
  );
};

export default Skeleton

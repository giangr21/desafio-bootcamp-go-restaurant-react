import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { FoodsContainer, Food } from './styles';

const Loading: React.FC = () => {
  return (
    <SkeletonTheme
      color="rgba(135, 134, 139, 0.1)"
      highlightColor="rgba(135, 134, 139, 0.1)"
    >
      <FoodsContainer>
        <Food>
          <Skeleton circle height={192} />
          <section className="body">
            <Skeleton height={35} width={90} />
            <p>
              <Skeleton height={20} width="90%" />
            </p>

            <p className="price">
              <Skeleton height={16} width={50} />
            </p>
          </section>
          <section className="footer">
            <div className="icon-container">
              <Skeleton height={16} width={100} />
            </div>

            <div className="availability-container">
              <p>
                <Skeleton height={16} width={100} />
              </p>
            </div>
          </section>
        </Food>
        <Food>
          <Skeleton circle height={192} />
          <section className="body">
            <Skeleton height={35} width={90} />
            <p>
              <Skeleton height={20} width="90%" />
            </p>

            <p className="price">
              <Skeleton height={16} width={50} />
            </p>
          </section>
          <section className="footer">
            <div className="icon-container">
              <Skeleton height={16} width={100} />
            </div>

            <div className="availability-container">
              <p>
                <Skeleton height={16} width={100} />
              </p>
            </div>
          </section>
        </Food>
        <Food>
          <Skeleton circle height={192} />
          <section className="body">
            <Skeleton height={35} width={90} />
            <p>
              <Skeleton height={20} width="90%" />
            </p>

            <p className="price">
              <Skeleton height={16} width={50} />
            </p>
          </section>
          <section className="footer">
            <div className="icon-container">
              <Skeleton height={16} width={100} />
            </div>

            <div className="availability-container">
              <p>
                <Skeleton height={16} width={100} />
              </p>
            </div>
          </section>
        </Food>
      </FoodsContainer>
    </SkeletonTheme>
  );
};

export default Loading;

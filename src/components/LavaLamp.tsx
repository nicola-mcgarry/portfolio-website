import React, { useEffect } from 'react';
import { TweenMax, TimelineMax, Linear } from 'gsap';
import styled from 'styled-components';

const randomBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const LavaLamp: React.FC = () => {
  useEffect(() => {
    const tl = new TimelineMax();

    for (let i = 0; i < 5; i++) {
      const t = TweenMax.to(document.querySelector(`#blob${i}`), randomBetween(14, 50), {
        y: 260,
        repeat: -1,
        repeatDelay: randomBetween(1, 3),
        yoyo: true,
        ease: Linear.easeNone,
      });

      tl.add(t, (i + 1) / 0.6);
    }

    tl.seek(120);
    tl.timeScale(2);
  }, []);

  return (
    <SVGWrapper>
      <svg
        width="500px"
        height="500px"
        viewBox="0 0 600 600"
        xmlSpace="preserve"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
              result="cm"
            />
          </filter>
          <radialGradient id="bgGrad" cx="300" cy="300" r="300" gradientUnits="userSpaceOnUse">
            <stop offset="7.142857e-002" style={{ stopColor: '#471A19' }} />
            <stop offset="0.3107" style={{ stopColor: '#290F0E' }} />
            <stop offset="0.553" style={{ stopColor: '#120706' }} />
            <stop offset="0.7828" style={{ stopColor: '#050202' }} />
            <stop offset="0.9847" style={{ stopColor: '#000000' }} />
          </radialGradient>
          <clipPath id="glassMask">
            <path
              id="glassShape"
              d="M262,174h60l33.5,182.3c0,0,2.7,12.8,2.5,22.8c-7.5,0-131,0-131,0s-0.7-9.3,0-18
                C227.6,352.9,262,174,262,174z"
            />
          </clipPath>
          <linearGradient id="lampTop_2_" gradientUnits="userSpaceOnUse" x1="292" y1="135" x2="292" y2="174">
            <stop offset="1.530612e-002" style={{ stopColor: '#000000' }} />
            <stop offset="0.233" style={{ stopColor: '#050202' }} />
            <stop offset="0.4808" style={{ stopColor: '#120706' }} />
            <stop offset="0.7421" style={{ stopColor: '#290F0E' }} />
            <stop offset="1" style={{ stopColor: '#471A19' }} />
          </linearGradient>
          <linearGradient id="lampBot_2_" gradientUnits="userSpaceOnUse" x1="292.375" y1="470" x2="292.375" y2="379">
            <stop offset="5.102041e-003" style={{ stopColor: '#000000' }} />
            <stop offset="0.2251" style={{ stopColor: '#050202' }} />
            <stop offset="0.4754" style={{ stopColor: '#120706' }} />
            <stop offset="0.7394" style={{ stopColor: '#290F0E' }} />
            <stop offset="1" style={{ stopColor: '#471A19' }} />
          </linearGradient>
          <radialGradient id="blob0_2_" cx="292" cy="171.5" r="56.5354" gradientUnits="userSpaceOnUse">
            <stop offset="1.020408e-002" style={{ stopColor: '#FF9C12' }} />
            <stop offset="0.1922" style={{ stopColor: '#FA9712' }} />
            <stop offset="0.3992" style={{ stopColor: '#ED8A14' }} />
            <stop offset="0.6186" style={{ stopColor: '#D67316' }} />
            <stop offset="0.8449" style={{ stopColor: '#B65419' }} />
            <stop offset="1" style={{ stopColor: '#9C3A1C' }} />
          </radialGradient>
          <radialGradient id="blob1_2_" cx="297" cy="167.5" r="37.2156" gradientUnits="userSpaceOnUse">
            <stop offset="1.020408e-002" style={{ stopColor: '#FF9C12' }} />
            <stop offset="0.1922" style={{ stopColor: '#FA9712' }} />
            <stop offset="0.3992" style={{ stopColor: '#ED8A14' }} />
            <stop offset="0.6186" style={{ stopColor: '#D67316' }} />
            <stop offset="0.8449" style={{ stopColor: '#B65419' }} />
            <stop offset="1" style={{ stopColor: '#9C3A1C' }} />
          </radialGradient>
          <radialGradient id="blob2_2_" cx="294" cy="157" r="23" gradientUnits="userSpaceOnUse">
            <stop offset="1.020408e-002" style={{ stopColor: '#FF9C12' }} />
            <stop offset="0.1922" style={{ stopColor: '#FA9712' }} />
            <stop offset="0.3992" style={{ stopColor: '#ED8A14' }} />
            <stop offset="0.6186" style={{ stopColor: '#D67316' }} />
            <stop offset="0.8449" style={{ stopColor: '#B65419' }} />
            <stop offset="1" style={{ stopColor: '#9C3A1C' }} />
          </radialGradient>
          <radialGradient
            id="botBlob_2_"
            cx="284.5"
            cy="421.5"
            r="53.521"
            gradientTransform="matrix(-2.802637e-002 -0.9996 5.9976 -0.1682 -2235.533 776.7669)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1.020408e-002" style={{ stopColor: '#FF9C12' }} />
            <stop offset="0.1922" style={{ stopColor: '#FA9712' }} />
            <stop offset="0.3992" style={{ stopColor: '#ED8A14' }} />
            <stop offset="0.6186" style={{ stopColor: '#D67316' }} />
            <stop offset="0.8449" style={{ stopColor: '#B65419' }} />
            <stop offset="1" style={{ stopColor: '#9C3A1C' }} />
          </radialGradient>
          <radialGradient id="blob3_2_" cx="291.9382" cy="167.4587" r="41.0767" gradientUnits="userSpaceOnUse">
            <stop offset="1.020408e-002" style={{ stopColor: '#FF9C12' }} />
            <stop offset="0.1922" style={{ stopColor: '#FA9712' }} />
            <stop offset="0.3992" style={{ stopColor: '#ED8A14' }} />
            <stop offset="0.6186" style={{ stopColor: '#D67316' }} />
            <stop offset="0.8449" style={{ stopColor: '#B65419' }} />
            <stop offset="1" style={{ stopColor: '#9C3A1C' }} />
          </radialGradient>
          <radialGradient id="blob4_2_" cx="306.5" cy="155" r="14.109" gradientUnits="userSpaceOnUse">
            <stop offset="1.020408e-002" style={{ stopColor: '#FF9C12' }} />
            <stop offset="0.1922" style={{ stopColor: '#FA9712' }} />
            <stop offset="0.3992" style={{ stopColor: '#ED8A14' }} />
            <stop offset="0.6186" style={{ stopColor: '#D67316' }} />
            <stop offset="0.8449" style={{ stopColor: '#B65419' }} />
            <stop offset="1" style={{ stopColor: '#9C3A1C' }} />
          </radialGradient>
        </defs>

        <rect id="bg" fill="url(#bgGrad)" width="600" height="600" />
        <use xlinkHref="#glassShape" fill="#EB7619" opacity="0.1" />
        <polygon id="lampTop" fill="url(#lampTop_2_)" points="269,135 262,174 322,174 316,135" />
        <path
          id="lampBot"
          fill="url(#lampBot_2_)"
          d="M226.8,379c2.6,43,23.9,54.6,28.3,60.2c3.3,5.4-10,30.8-10,30.8h95.5
            c0,0-16.5-25.1-14.5-30.8s26-15.2,32-60.2C328,379,240.3,379,226.8,379z"
        />
        <rect id="tableTop" y="470" width="600" height="130" />

        <g clipPath="url(#glassMask)" filter="url(#goo)">
          <path
            id="blob0"
            fill="url(#blob0_2_)"
            d="M326.2,149.5c-5,19.2-21.4,29.2-37.8,26.6c-16.5-2.9-33.4-12.9-37.1-26.6
                c-3.8-13.6,12.5-32.1,37.8-34.9C314.4,111.8,331.3,130.4,326.2,149.5z"
          />
          <path
            id="blob1"
            fill="url(#blob1_2_)"
            d="M320.5,146.4c-4.4,10.1-16.4,20.2-26.8,25.3c-10.4,5.2-22.4-2.9-26.8-15.2
                c-4.4-11.6,7.6-20.4,26.8-25.3C312.9,126.3,324.9,135.6,320.5,146.4z"
          />
          <path
            id="blob2"
            fill="url(#blob2_2_)"
            d="M278,147.7c2.7-7.1,9.4-15.7,15.4-16.4c5.9-0.4,12.6,8.5,15.4,16.9
                c2.7,8.4-4.2,14.9-15.4,14.2C282.2,161.5,275.3,154.8,278,147.7z"
          />
          <path
            id="botBlob"
            fill="url(#botBlob_2_)"
            d="M354,381.2c6.8,3.4,5.4,7.4-5.6,10.4c-10.7,3.1-31.1,5.1-54.4,8.4
                c-23.3,3.3-43.7,0.8-54.4-2.4c-11-3.4-12.4-7.6-5.6-13.8c6.8-7,18.9-14.6,29.6-17.4c11-3.3,20.6-1.8,30.4-1.4
                c9.8,0.4,19.4,5.1,30.4,8.3C335.1,376.8,347.2,378.6,354,381.2z"
          />
          <path
            id="blob3"
            fill="url(#blob3_2_)"
            d="M312.7,147.3c-2.1,16.4-15.3,27.2-23.2,25.3c-8.1-1.8-12.6-13-14.8-24.9
                c-1.9-11.8,2.7-22.7,14.8-25.3C301.5,119.6,314.7,130.8,312.7,147.3z"
          />
          <path
            id="blob4"
            fill="url(#blob4_2_)"
            d="M317.8,147.4c-1,8.2-9.8,10.3-13.8,9.3c-4-0.9-6.5-3-7.6-8.9c-1-5.9,2.3-8.5,8.4-9.8
                C310.8,136.6,318.8,139.1,317.8,147.4z"
          />
        </g>
      </svg>
    </SVGWrapper>
  );
};

const SVGWrapper = styled.div`
  background: transparent;
  text-align: center;
  height: 100vh;

  svg {
    margin: auto;
  }
`;

export default LavaLamp;

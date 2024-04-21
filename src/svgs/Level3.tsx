
type Props = {
    offsetY: number,
    sectionRef: React.RefObject<HTMLDivElement>
}

const Level3 = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
      <defs>
        <style>
          {`.level-3-cls-1, .level-3-cls-2, .level-3-cls-3 {
            fill: #ca5745;
          }
    
          .level-3-cls-4, .level-3-cls-5, .level-3-cls-6 {
            fill: #b1e2ef;
          }
    
          .level-3-cls-7 {
            fill: #c7b89a;
          }
    
          .level-3-cls-7, .level-3-cls-8, .level-3-cls-9, .level-3-cls-10, .level-3-cls-11, .level-3-cls-6, .level-3-cls-12, .level-3-cls-13, .level-3-cls-14, .level-3-cls-15 {
            fill-rule: evenodd;
          }
    
          .level-3-cls-16 {
            fill: #def6ff;
          }
    
          .level-3-cls-17 {
            clip-path: url(#level-3-clippath-2);
          }
    
          .level-3-cls-17, .level-3-cls-18, .level-3-cls-19, .level-3-cls-20, .level-3-cls-21, .level-3-cls-22, .level-3-cls-23, .level-3-cls-24 {
            fill: none;
          }
    
          .level-3-cls-25, .level-3-cls-9 {
            fill: #fff;
          }
    
          .level-3-cls-18 {
            stroke: #5ab4cd;
            stroke-width: 1.44px;
          }
    
          .level-3-cls-18, .level-3-cls-20 {
            stroke-miterlimit: 10;
          }
    
          .level-3-cls-26 {
            fill: #a9dbed;
          }
    
          .level-3-cls-27 {
            fill: #372a58;
          }
    
          .level-3-cls-28, .level-3-cls-13 {
            fill: #5290ab;
          }
    
          .level-3-cls-8, .level-3-cls-5, .level-3-cls-10, .level-3-cls-2, .level-3-cls-29, .level-3-cls-30, .level-3-cls-3 {
            mix-blend-mode: multiply;
          }
    
          .level-3-cls-8, .level-3-cls-10 {
            opacity: .4;
          }
    
          .level-3-cls-8, .level-3-cls-12, .level-3-cls-31 {
            fill: #deceba;
          }
    
          .level-3-cls-32, .level-3-cls-15 {
            fill: #cbefff;
          }
    
          .level-3-cls-19 {
            opacity: .8;
          }
    
          .level-3-cls-33 {
            fill: #ff5c2e;
          }
    
          .level-3-cls-20 {
            stroke: #5290ab;
            stroke-width: .41px;
          }
    
          .level-3-cls-34, .level-3-cls-10, .level-3-cls-11, .level-3-cls-14 {
            fill: #7cb4cc;
          }
    
          .level-3-cls-35 {
            fill: #0690ad;
          }
    
          .level-3-cls-36 {
            fill: #e65642;
          }
    
          .level-3-cls-2 {
            opacity: .2;
          }
    
          .level-3-cls-37 {
            fill: #f6e7d3;
          }
    
          .level-3-cls-21 {
            isolation: isolate;
          }
    
          .level-3-cls-38 {
            fill: #ff5c26;
          }
    
          .level-3-cls-29 {
            fill: #dca50e;
          }
    
          .level-3-cls-29, .level-3-cls-11, .level-3-cls-39 {
            opacity: .5;
          }
    
          .level-3-cls-30, .level-3-cls-3 {
            opacity: .3;
          }
    
          .level-3-cls-30, .level-3-cls-40 {
            fill: #372e57;
          }
    
          .level-3-cls-23 {
            clip-path: url(#level-3-clippath);
          }
    
          .level-3-cls-41 {
            fill: #d48482;
          }
    
          .level-3-cls-24 {
            clip-path: url(#level-3-clippath-1);
          }
    
          .level-3-cls-42 {
            fill: #f7a7a5;
          }
    
          .level-3-cls-39 {
            fill: #df2905;
          }`}
        </style>
        <clipPath id="level-3-clippath">
          <rect className="level-3-cls-22" x=".56" width="500" height="427.69"/>
        </clipPath>
        <clipPath id="level-3-clippath-1">
          <rect className="level-3-cls-22" x=".28" y="126.12" width="500" height="374.67"/>
        </clipPath>
        <clipPath id="level-3-clippath-2">
          <polygon className="level-3-cls-28" points="369.85 370.57 300.39 372.13 319.25 381.82 391.12 380.32 369.85 370.57"/>
        </clipPath>
      </defs>
      <g className="level-3-cls-21">
        <g id="Layer_2" data-name="Layer 2">
          <g id="BACKGROUND">
            <g>
              <g style={{ transform: `translateY(${-props.offsetY * 0.2 + (props.sectionRef.current ? props.sectionRef.current?.getBoundingClientRect().height / 1.4: 0)}px)` }}>
                <rect className="level-3-cls-25" y=".24" width="500" height="500"/>
                <g className="level-3-cls-19">
                  <g className="level-3-cls-23">
                    <polygon className="level-3-cls-32" points="291.27 427.69 291.27 73.08 339.67 51.34 339.67 36.01 387.74 19.86 387.74 427.69 291.27 427.69"/>
                    <polygon className="level-3-cls-32" points="145.89 64.41 145.89 406.23 277.36 406.23 277.36 21.46 145.89 64.41"/>
                    <polygon className="level-3-cls-32" points="103.59 20.28 103.59 34.39 88.87 34.39 88.87 50.15 30.49 70.75 30.49 421.59 132.9 421.59 132.9 38.76 132.9 34.39 132.9 20.28 103.59 20.28"/>
                    <polygon className="level-3-cls-32" points="530.88 45.53 530.88 59.64 519.74 59.64 519.74 75.39 514.31 77.93 514.31 74.47 514.31 70.1 514.31 56 492.12 56 492.12 70.1 480.98 70.1 480.98 85.86 436.78 106.47 436.78 457.3 514.31 457.3 514.31 446.84 553.07 446.84 553.07 64.01 553.07 59.64 553.07 45.53 530.88 45.53"/>
                    <g>
                      <rect className="level-3-cls-26" x="-64.87" y="43.17" width="115.96" height="340.05"/>
                      <g>
                        <g>
                          <rect className="level-3-cls-16" x="-3" y="51.67" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="14.67" y="51.67" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="32.34" y="51.67" width="9.88" height="15.36"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-16" x="-3" y="76.61" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="14.67" y="76.61" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="32.34" y="76.61" width="9.88" height="15.36"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-16" x="-3" y="101.55" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="14.67" y="101.55" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="32.34" y="101.55" width="9.88" height="15.36"/>
                        </g>
                        <g>
                          <g>
                            <rect className="level-3-cls-16" x="-3" y="140.91" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="14.67" y="140.91" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="32.34" y="140.91" width="9.88" height="15.37"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="-3" y="165.85" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="14.67" y="165.85" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="32.34" y="165.85" width="9.88" height="15.37"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="-3" y="190.79" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="14.67" y="190.79" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="32.34" y="190.79" width="9.88" height="15.37"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect className="level-3-cls-16" x="-3" y="232.76" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="14.67" y="232.76" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="32.34" y="232.76" width="9.88" height="15.36"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="-3" y="257.71" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="14.67" y="257.71" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="32.34" y="257.71" width="9.88" height="15.36"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="-3" y="282.64" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="14.67" y="282.64" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="32.34" y="282.64" width="9.88" height="15.37"/>
                          </g>
                        </g>
                      </g>
                      <rect className="level-3-cls-34" x="-64.87" y="127.62" width="115.96" height="5.18"/>
                      <rect className="level-3-cls-34" x="-64.87" y="218.03" width="115.96" height="5.18"/>
                      <rect className="level-3-cls-34" x="-64.87" y="311.64" width="115.96" height="5.18"/>
                      <rect className="level-3-cls-34" x="-73.27" y="31.85" width="132.76" height="15.56"/>
                      <rect className="level-3-cls-26" x="-73.27" y="39.63" width="132.76" height="3.54"/>
                    </g>
                    <g>
                      <rect className="level-3-cls-4" x="62.61" y="129.08" width="115.95" height="306.3"/>
                      <g>
                        <rect className="level-3-cls-34" x="57.2" y="126.19" width="126.79" height="7.78"/>
                        <rect className="level-3-cls-34" x="59.9" y="133.58" width="121.38" height="6.75"/>
                        <rect className="level-3-cls-26" x="59.9" y="133.58" width="121.38" height="2.86"/>
                      </g>
                      <g>
                        <g>
                          <rect className="level-3-cls-16" x="69.58" y="150.38" width="48.19" height="13.57"/>
                          <rect className="level-3-cls-16" x="123.4" y="150.38" width="48.19" height="13.57"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-16" x="69.58" y="178.87" width="48.19" height="13.57"/>
                          <rect className="level-3-cls-16" x="123.4" y="178.87" width="48.19" height="13.57"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-16" x="69.58" y="207.37" width="48.19" height="13.57"/>
                          <rect className="level-3-cls-16" x="123.4" y="207.37" width="48.19" height="13.57"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-16" x="69.58" y="235.87" width="48.19" height="13.57"/>
                          <rect className="level-3-cls-16" x="123.4" y="235.87" width="48.19" height="13.57"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-16" x="69.58" y="264.37" width="48.19" height="13.57"/>
                          <rect className="level-3-cls-16" x="123.4" y="264.37" width="48.19" height="13.57"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-16" x="69.58" y="292.87" width="48.19" height="13.57"/>
                          <rect className="level-3-cls-16" x="123.4" y="292.87" width="48.19" height="13.57"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-16" x="69.58" y="321.37" width="48.19" height="13.57"/>
                          <rect className="level-3-cls-16" x="123.4" y="321.37" width="48.19" height="13.57"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-16" x="69.58" y="349.86" width="48.19" height="13.57"/>
                          <rect className="level-3-cls-16" x="123.4" y="349.86" width="48.19" height="13.57"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-16" x="69.58" y="378.36" width="48.19" height="13.57"/>
                          <rect className="level-3-cls-16" x="123.4" y="378.36" width="48.19" height="13.57"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-16" x="69.58" y="406.86" width="48.19" height="13.57"/>
                          <rect className="level-3-cls-16" x="123.4" y="406.86" width="48.19" height="13.57"/>
                        </g>
                      </g>
                    </g>
                    <g>
                      <rect className="level-3-cls-26" x="467.29" y="153.28" width="115.96" height="306.3"/>
                      <g>
                        <rect className="level-3-cls-34" x="461.87" y="150.39" width="126.79" height="7.78"/>
                        <rect className="level-3-cls-34" x="464.58" y="157.78" width="121.37" height="6.75"/>
                        <rect className="level-3-cls-26" x="464.58" y="157.78" width="121.37" height="2.86"/>
                      </g>
                      <g>
                        <rect className="level-3-cls-16" x="474.26" y="174.58" width="48.2" height="13.57"/>
                        <rect className="level-3-cls-16" x="474.26" y="203.07" width="48.2" height="13.57"/>
                        <rect className="level-3-cls-16" x="474.26" y="231.57" width="48.2" height="13.57"/>
                        <rect className="level-3-cls-16" x="474.26" y="260.07" width="48.2" height="13.57"/>
                        <rect className="level-3-cls-16" x="474.26" y="288.57" width="48.2" height="13.57"/>
                        <rect className="level-3-cls-16" x="474.26" y="317.07" width="48.2" height="13.57"/>
                        <rect className="level-3-cls-16" x="474.26" y="345.56" width="48.2" height="13.57"/>
                        <rect className="level-3-cls-16" x="474.26" y="374.06" width="48.2" height="13.57"/>
                        <rect className="level-3-cls-16" x="474.26" y="402.56" width="48.2" height="13.57"/>
                        <rect className="level-3-cls-16" x="474.26" y="431.06" width="48.2" height="13.57"/>
                      </g>
                    </g>
                    <g>
                      <rect className="level-3-cls-26" x="197.92" y="87.42" width="128.4" height="408.12"/>
                      <g>
                        <rect className="level-3-cls-34" x="191.92" y="79.59" width="140.4" height="11.64"/>
                        <rect className="level-3-cls-34" x="194.92" y="90.65" width="134.4" height="10.1"/>
                        <rect className="level-3-cls-26" x="194.92" y="90.65" width="134.4" height="4.28"/>
                      </g>
                      <g>
                        <g>
                          <g>
                            <rect className="level-3-cls-16" x="206.05" y="109.66" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="214.21" y="109.66" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="206.05" y="122.57" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="237.29" y="109.66" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="245.44" y="109.66" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="237.29" y="122.57" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="268.52" y="109.66" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="276.67" y="109.66" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="268.52" y="122.57" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="299.75" y="109.66" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="307.9" y="109.66" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="299.75" y="122.57" width="18.43" height="1.66"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect className="level-3-cls-16" x="206.05" y="151.34" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="214.21" y="151.34" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="206.05" y="164.24" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="237.29" y="151.34" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="245.44" y="151.34" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="237.29" y="164.24" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="268.52" y="151.34" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="276.67" y="151.34" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="268.52" y="164.24" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="299.75" y="151.34" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="307.9" y="151.34" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="299.75" y="164.24" width="18.43" height="1.66"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect className="level-3-cls-16" x="206.05" y="194.59" width="18.43" height="27.47"/>
                            <rect className="level-3-cls-34" x="214.21" y="194.59" width="2.13" height="27.47"/>
                            <rect className="level-3-cls-34" x="206.05" y="207.5" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="237.29" y="194.59" width="18.43" height="27.47"/>
                            <rect className="level-3-cls-34" x="245.44" y="194.59" width="2.13" height="27.47"/>
                            <rect className="level-3-cls-34" x="237.29" y="207.5" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="268.52" y="194.59" width="18.43" height="27.47"/>
                            <rect className="level-3-cls-34" x="276.67" y="194.59" width="2.13" height="27.47"/>
                            <rect className="level-3-cls-34" x="268.52" y="207.5" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="299.75" y="194.59" width="18.43" height="27.47"/>
                            <rect className="level-3-cls-34" x="307.9" y="194.59" width="2.13" height="27.47"/>
                            <rect className="level-3-cls-34" x="299.75" y="207.5" width="18.43" height="1.66"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect className="level-3-cls-16" x="206.05" y="238.16" width="18.43" height="27.47"/>
                            <rect className="level-3-cls-34" x="214.21" y="238.16" width="2.13" height="27.47"/>
                            <rect className="level-3-cls-34" x="206.05" y="251.07" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="237.29" y="238.16" width="18.43" height="27.47"/>
                            <rect className="level-3-cls-34" x="245.44" y="238.16" width="2.13" height="27.47"/>
                            <rect className="level-3-cls-34" x="237.29" y="251.07" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="268.52" y="238.16" width="18.43" height="27.47"/>
                            <rect className="level-3-cls-34" x="276.67" y="238.16" width="2.13" height="27.47"/>
                            <rect className="level-3-cls-34" x="268.52" y="251.07" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="299.75" y="238.16" width="18.43" height="27.47"/>
                            <rect className="level-3-cls-34" x="307.9" y="238.16" width="2.13" height="27.47"/>
                            <rect className="level-3-cls-34" x="299.75" y="251.07" width="18.43" height="1.66"/>
                          </g>
                        </g>
                      </g>
                      <g>
                        <g>
                          <g>
                            <rect className="level-3-cls-16" x="206.05" y="295.58" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="214.21" y="295.58" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="206.05" y="308.48" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="237.29" y="295.58" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="245.44" y="295.58" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="237.29" y="308.48" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="268.52" y="295.58" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="276.67" y="295.58" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="268.52" y="308.48" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="299.75" y="295.58" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="307.9" y="295.58" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="299.75" y="308.48" width="18.43" height="1.66"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect className="level-3-cls-16" x="206.05" y="337.26" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="214.21" y="337.26" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="206.05" y="350.16" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="237.29" y="337.26" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="245.44" y="337.26" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="237.29" y="350.16" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="268.52" y="337.26" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="276.67" y="337.26" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="268.52" y="350.16" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="299.75" y="337.26" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="307.9" y="337.26" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="299.75" y="350.16" width="18.43" height="1.66"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect className="level-3-cls-16" x="206.05" y="380.51" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="214.21" y="380.51" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="206.05" y="393.42" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="237.29" y="380.51" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="245.44" y="380.51" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="237.29" y="393.42" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="268.52" y="380.51" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="276.67" y="380.51" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="268.52" y="393.42" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="299.75" y="380.51" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="307.9" y="380.51" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="299.75" y="393.42" width="18.43" height="1.66"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect className="level-3-cls-16" x="206.05" y="424.08" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="214.21" y="424.08" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="206.05" y="436.99" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="237.29" y="424.08" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="245.44" y="424.08" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="237.29" y="436.99" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="268.52" y="424.08" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="276.67" y="424.08" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="268.52" y="436.99" width="18.43" height="1.66"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="299.75" y="424.08" width="18.43" height="27.46"/>
                            <rect className="level-3-cls-34" x="307.9" y="424.08" width="2.13" height="27.46"/>
                            <rect className="level-3-cls-34" x="299.75" y="436.99" width="18.43" height="1.66"/>
                          </g>
                        </g>
                      </g>
                      <g>
                        <rect className="level-3-cls-34" x="197.92" y="274.63" width="128.4" height="13.65"/>
                        <rect className="level-3-cls-26" x="197.92" y="278.1" width="128.4" height="2.61"/>
                        <rect className="level-3-cls-26" x="197.92" y="282.14" width="128.4" height="2.6"/>
                      </g>
                    </g>
                    <g>
                      <rect className="level-3-cls-4" x="339.8" y="49.48" width="115.96" height="340.05"/>
                      <g>
                        <g>
                          <rect className="level-3-cls-16" x="348.67" y="57.97" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="366.34" y="57.97" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="384.01" y="57.97" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="401.67" y="57.97" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="419.34" y="57.97" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="437.01" y="57.97" width="9.88" height="15.36"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-16" x="348.67" y="82.91" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="366.34" y="82.91" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="384.01" y="82.91" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="401.67" y="82.91" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="419.34" y="82.91" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="437.01" y="82.91" width="9.88" height="15.36"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-16" x="348.67" y="107.86" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="366.34" y="107.86" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="384.01" y="107.86" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="401.67" y="107.86" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="419.34" y="107.86" width="9.88" height="15.36"/>
                          <rect className="level-3-cls-16" x="437.01" y="107.86" width="9.88" height="15.36"/>
                        </g>
                        <g>
                          <g>
                            <rect className="level-3-cls-16" x="348.67" y="147.21" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="366.34" y="147.21" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="384.01" y="147.21" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="401.67" y="147.21" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="419.34" y="147.21" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="437.01" y="147.21" width="9.88" height="15.37"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="348.67" y="172.15" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="366.34" y="172.15" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="384.01" y="172.15" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="401.67" y="172.15" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="419.34" y="172.15" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="437.01" y="172.15" width="9.88" height="15.36"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="348.67" y="197.1" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="366.34" y="197.1" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="384.01" y="197.1" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="401.67" y="197.1" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="419.34" y="197.1" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="437.01" y="197.1" width="9.88" height="15.37"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect className="level-3-cls-16" x="348.67" y="239.07" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="366.34" y="239.07" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="384.01" y="239.07" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="401.67" y="239.07" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="419.34" y="239.07" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="437.01" y="239.07" width="9.88" height="15.36"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="348.67" y="264.01" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="366.34" y="264.01" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="384.01" y="264.01" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="401.67" y="264.01" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="419.34" y="264.01" width="9.88" height="15.36"/>
                            <rect className="level-3-cls-16" x="437.01" y="264.01" width="9.88" height="15.36"/>
                          </g>
                          <g>
                            <rect className="level-3-cls-16" x="348.67" y="288.95" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="366.34" y="288.95" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="384.01" y="288.95" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="401.67" y="288.95" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="419.34" y="288.95" width="9.88" height="15.37"/>
                            <rect className="level-3-cls-16" x="437.01" y="288.95" width="9.88" height="15.37"/>
                          </g>
                        </g>
                      </g>
                      <rect className="level-3-cls-34" x="339.8" y="133.93" width="115.96" height="5.18"/>
                      <rect className="level-3-cls-34" x="339.8" y="224.34" width="115.96" height="5.18"/>
                      <rect className="level-3-cls-34" x="339.8" y="317.95" width="115.96" height="5.18"/>
                      <rect className="level-3-cls-34" x="331.4" y="38.16" width="132.76" height="15.56"/>
                      <rect className="level-3-cls-4" x="331.4" y="45.94" width="132.76" height="3.54"/>
                    </g>
                  </g>
                </g>
              </g>
              <g className="level-3-cls-24">
                <rect className="level-3-cls-28" x="-5.89" y="286.16" width="359.54" height="16.08"/>
                <g>
                  <g>
                    <g>
                      <rect className="level-3-cls-28" x="-89.31" y="241.77" width="444.79" height="6.14"/>
                      <rect className="level-3-cls-28" x="-89.27" y="257.26" width="444.79" height="6.14"/>
                      <rect className="level-3-cls-28" x="136.58" y="151.35" width="2.61" height="126.6"/>
                      <rect className="level-3-cls-28" x="354.17" y="151.35" width="2.61" height="126.6"/>
                      <rect className="level-3-cls-28" x="64.04" y="243.48" width="2.61" height="34.47"/>
                      <rect className="level-3-cls-28" x="209.11" y="243.48" width="2.61" height="34.47"/>
                      <rect className="level-3-cls-28" x="281.64" y="243.48" width="2.61" height="34.47"/>
                    </g>
                    <g>
                      <path className="level-3-cls-28" d="m27.7,192.61c-38.55,0-75.58-12.04-107.52-36.05l.43-.57c61.97,46.59,143.21,47.92,217.32,3.54l.37.61c-36.18,21.67-74.07,32.48-110.59,32.48Z"/>
                      <g>
                        <g>
                          <rect className="level-3-cls-28" x="-.42" y="190.87" width="3.11" height="2.14" transform="translate(-189.31 167.98) rotate(-82.49)"/>
                          <path className="level-3-cls-28" d="m2.83,195.09c-.15,1.14-1.2,1.95-2.35,1.8-1.14-.15-1.95-1.2-1.79-2.34.15-1.14,1.2-1.95,2.35-1.8,1.14.15,1.95,1.2,1.79,2.35Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="6.89" y="191.87" width="3.11" height="2.14" transform="translate(-183.94 176.06) rotate(-82.48)"/>
                          <path className="level-3-cls-28" d="m10.13,196.08c-.15,1.14-1.2,1.95-2.34,1.8-1.14-.15-1.95-1.2-1.8-2.34.15-1.14,1.2-1.95,2.35-1.8,1.14.15,1.95,1.2,1.79,2.34Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="14.31" y="192.07" width="3.11" height="2.14" transform="translate(-177.93 193.56) rotate(-85.43)"/>
                          <path className="level-3-cls-28" d="m17.72,196.2c-.09,1.15-1.1,2.01-2.25,1.91-1.15-.09-2.01-1.1-1.91-2.25.09-1.15,1.1-2.01,2.25-1.92,1.15.09,2.01,1.1,1.91,2.25Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="22.9" y="192.9" width="3.11" height="2.14" transform="translate(-170.75 204.89) rotate(-86.02)"/>
                          <path className="level-3-cls-28" d="m26.34,197c-.08,1.15-1.08,2.02-2.23,1.94-1.15-.08-2.02-1.08-1.94-2.23.08-1.15,1.08-2.02,2.23-1.94,1.15.08,2.02,1.08,1.94,2.23Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="30.72" y="192.44" width="2.14" height="3.11" transform="translate(-1.59 .27) rotate(-.47)"/>
                          <path className="level-3-cls-28" d="m33.9,196.87c0,1.15-.92,2.09-2.07,2.1-1.15,0-2.09-.92-2.1-2.07,0-1.15.92-2.1,2.07-2.1,1.15,0,2.09.92,2.1,2.07Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="38.47" y="191.55" width="2.14" height="3.11" transform="translate(-1.58 .33) rotate(-.47)"/>
                          <path className="level-3-cls-28" d="m41.65,195.98c0,1.15-.92,2.1-2.07,2.1-1.15,0-2.09-.92-2.1-2.07,0-1.15.92-2.1,2.07-2.1,1.15,0,2.09.92,2.1,2.07Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="45.82" y="191.36" width="2.14" height="3.11" transform="translate(-15.09 4.31) rotate(-4.53)"/>
                          <path className="level-3-cls-28" d="m49.2,195.63c.09,1.15-.77,2.16-1.92,2.25-1.15.09-2.15-.77-2.25-1.92-.09-1.15.77-2.16,1.92-2.25,1.15-.09,2.15.77,2.25,1.92Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="53.77" y="190.4" width="2.14" height="3.11" transform="translate(-15.01 4.94) rotate(-4.54)"/>
                          <path className="level-3-cls-28" d="m57.15,194.67c.09,1.15-.77,2.16-1.92,2.25-1.15.09-2.16-.77-2.25-1.92s.77-2.16,1.92-2.25c1.15-.09,2.15.77,2.25,1.92Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="62.19" y="189.12" width="2.14" height="3.11" transform="translate(-14.87 5.6) rotate(-4.53)"/>
                          <path className="level-3-cls-28" d="m65.57,193.4c.09,1.15-.77,2.15-1.92,2.25-1.15.09-2.15-.77-2.25-1.92-.09-1.15.77-2.16,1.92-2.25,1.15-.09,2.15.77,2.25,1.92Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="69.67" y="187.49" width="2.14" height="3.11" transform="translate(-37.94 18.96) rotate(-12.06)"/>
                          <path className="level-3-cls-28" d="m73.39,191.43c.24,1.13-.48,2.24-1.61,2.48-1.13.24-2.24-.48-2.48-1.61-.24-1.13.48-2.24,1.61-2.48,1.13-.24,2.24.48,2.48,1.61Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="77.93" y="185.5" width="2.14" height="3.11" transform="translate(-52.51 32.34) rotate(-17.47)"/>
                          <path className="level-3-cls-28" d="m81.87,189.19c.34,1.1-.27,2.27-1.37,2.62-1.1.35-2.27-.27-2.62-1.37-.35-1.1.27-2.27,1.37-2.62,1.1-.35,2.27.27,2.62,1.37Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="84.7" y="183.79" width="2.14" height="3.11" transform="translate(-51.72 34.33) rotate(-17.48)"/>
                          <path className="level-3-cls-28" d="m88.64,187.47c.34,1.1-.27,2.27-1.37,2.62-1.1.35-2.27-.27-2.62-1.37-.35-1.1.26-2.27,1.37-2.62,1.1-.35,2.27.27,2.62,1.37Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="91.46" y="181.32" width="2.14" height="3.11" transform="translate(-50.66 36.24) rotate(-17.48)"/>
                          <path className="level-3-cls-28" d="m95.39,185.01c.35,1.1-.27,2.27-1.37,2.62-1.1.35-2.27-.27-2.62-1.37-.35-1.1.27-2.27,1.37-2.62,1.1-.35,2.27.27,2.62,1.37Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="97.98" y="178.85" width="2.14" height="3.11" transform="translate(-49.62 38.09) rotate(-17.48)"/>
                          <path className="level-3-cls-28" d="m101.92,182.54c.35,1.1-.27,2.27-1.37,2.62-1.1.35-2.27-.27-2.62-1.37-.35-1.1.27-2.27,1.37-2.62,1.1-.35,2.27.27,2.62,1.37Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="104.86" y="176.47" width="2.14" height="3.11" transform="translate(-48.58 40.04) rotate(-17.48)"/>
                          <path className="level-3-cls-28" d="m108.79,180.16c.35,1.1-.27,2.27-1.37,2.62-1.1.35-2.27-.27-2.62-1.37-.35-1.1.27-2.27,1.37-2.62,1.1-.35,2.27.27,2.62,1.37Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="110.67" y="174.04" width="2.14" height="3.11" transform="translate(-47.55 41.64) rotate(-17.47)"/>
                          <path className="level-3-cls-28" d="m114.61,177.72c.35,1.1-.27,2.27-1.37,2.62-1.1.35-2.27-.27-2.62-1.37-.35-1.1.26-2.27,1.37-2.62,1.1-.35,2.27.27,2.62,1.37Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="117.43" y="170.71" width="2.14" height="3.11" transform="translate(-46.29 43.57) rotate(-17.49)"/>
                          <path className="level-3-cls-28" d="m121.37,174.4c.35,1.1-.27,2.27-1.37,2.62-1.1.35-2.27-.27-2.62-1.37-.35-1.1.27-2.27,1.37-2.62,1.1-.35,2.27.27,2.62,1.37Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="123.76" y="167.49" width="2.14" height="3.11" transform="translate(-62.67 74.17) rotate(-26.72)"/>
                          <path className="level-3-cls-28" d="m128,170.69c.52,1.03.1,2.29-.93,2.8-1.03.52-2.29.1-2.8-.93-.52-1.03-.1-2.29.93-2.8,1.03-.52,2.29-.1,2.8.93Z"/>
                        </g>
                      </g>
                    </g>
                    <g>
                      <path className="level-3-cls-28" d="m245.07,194.03c-38.55,0-75.58-12.04-107.52-36.05l.43-.57c61.96,46.59,143.21,47.92,217.32,3.54l.37.61c-36.18,21.67-74.07,32.48-110.59,32.48Z"/>
                      <g>
                        <g>
                          <rect className="level-3-cls-28" x="146.23" y="165.54" width="3.11" height="2.14" transform="translate(-71.93 203.01) rotate(-57.83)"/>
                          <path className="level-3-cls-28" d="m148.01,170.17c-.61.98-1.9,1.27-2.88.66-.98-.62-1.27-1.9-.65-2.88.61-.98,1.9-1.27,2.88-.66.98.61,1.27,1.9.65,2.88Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="152.99" y="169.87" width="3.11" height="2.14" transform="translate(-72.45 210.71) rotate(-57.82)"/>
                          <path className="level-3-cls-28" d="m154.77,174.5c-.61.98-1.9,1.27-2.88.66-.98-.61-1.27-1.9-.65-2.88.61-.98,1.9-1.27,2.88-.66.98.61,1.27,1.9.66,2.88Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="160.1" y="173.64" width="3.11" height="2.14" transform="translate(-72.32 218.47) rotate(-57.82)"/>
                          <path className="level-3-cls-28" d="m161.88,178.27c-.61.98-1.9,1.27-2.88.66-.98-.62-1.27-1.9-.65-2.88.61-.98,1.9-1.27,2.88-.66.98.61,1.27,1.9.65,2.88Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="166.65" y="176.78" width="3.11" height="2.14" transform="translate(-66.63 246.99) rotate(-63)"/>
                          <path className="level-3-cls-28" d="m168.75,181.38c-.52,1.03-1.78,1.44-2.81.91-1.03-.52-1.44-1.78-.91-2.81.52-1.03,1.78-1.44,2.81-.91,1.03.52,1.44,1.78.91,2.81Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="174.34" y="179.97" width="3.11" height="2.14" transform="translate(-63.62 260.73) rotate(-64.23)"/>
                          <path className="level-3-cls-28" d="m176.52,184.56c-.5,1.04-1.75,1.47-2.79.97-1.04-.5-1.47-1.75-.97-2.79.5-1.04,1.75-1.47,2.79-.97,1.04.5,1.47,1.75.97,2.79Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="180.3" y="182.32" width="3.11" height="2.14" transform="translate(-51.6 293.84) rotate(-70.56)"/>
                          <path className="level-3-cls-28" d="m182.86,186.81c-.38,1.09-1.58,1.66-2.66,1.28-1.09-.38-1.66-1.58-1.27-2.66.38-1.09,1.58-1.66,2.66-1.28,1.09.38,1.66,1.58,1.27,2.66Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="187.28" y="184.78" width="3.11" height="2.14" transform="translate(-49.24 302.12) rotate(-70.57)"/>
                          <path className="level-3-cls-28" d="m189.84,189.27c-.38,1.09-1.58,1.66-2.66,1.27-1.09-.38-1.66-1.58-1.27-2.66.38-1.09,1.58-1.66,2.67-1.27,1.09.38,1.66,1.58,1.27,2.67Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="194.86" y="187.22" width="3.11" height="2.14" transform="translate(-38.77 325.11) rotate(-73.98)"/>
                          <path className="level-3-cls-28" d="m197.62,191.64c-.32,1.11-1.48,1.75-2.58,1.43-1.11-.32-1.75-1.48-1.43-2.58.32-1.11,1.48-1.75,2.58-1.43,1.11.32,1.75,1.48,1.43,2.59Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="202.21" y="189.48" width="3.11" height="2.14" transform="translate(-35.6 333.85) rotate(-73.99)"/>
                          <path className="level-3-cls-28" d="m204.97,193.91c-.32,1.11-1.48,1.75-2.58,1.43-1.11-.32-1.75-1.48-1.43-2.58.32-1.11,1.48-1.75,2.58-1.43,1.11.32,1.75,1.48,1.43,2.58Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="209.17" y="191.07" width="3.11" height="2.14" transform="translate(-7.32 375.92) rotate(-82.49)"/>
                          <path className="level-3-cls-28" d="m212.41,195.28c-.15,1.14-1.2,1.95-2.34,1.8-1.14-.15-1.95-1.2-1.79-2.34.15-1.14,1.2-1.95,2.34-1.8,1.14.15,1.95,1.2,1.8,2.35Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="216.96" y="192.3" width="3.11" height="2.14" transform="translate(-1.77 384.71) rotate(-82.49)"/>
                          <path className="level-3-cls-28" d="m220.2,196.51c-.15,1.14-1.2,1.95-2.35,1.8-1.14-.15-1.95-1.2-1.79-2.34.15-1.14,1.2-1.95,2.34-1.8,1.14.15,1.95,1.2,1.8,2.34Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="224.26" y="193.29" width="3.11" height="2.14" transform="translate(3.6 392.83) rotate(-82.49)"/>
                          <path className="level-3-cls-28" d="m227.5,197.5c-.15,1.14-1.2,1.95-2.35,1.8-1.14-.15-1.95-1.2-1.79-2.34.15-1.14,1.2-1.95,2.34-1.8,1.14.15,1.95,1.2,1.8,2.34Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="231.69" y="193.49" width="3.11" height="2.14" transform="translate(20.7 411.56) rotate(-85.43)"/>
                          <path className="level-3-cls-28" d="m235.09,197.62c-.09,1.15-1.1,2.01-2.25,1.91-1.15-.09-2.01-1.1-1.91-2.25.09-1.15,1.1-2.01,2.25-1.92,1.15.09,2.01,1.1,1.91,2.25Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="240.27" y="194.32" width="3.11" height="2.14" transform="translate(30.1 423.06) rotate(-86.02)"/>
                          <path className="level-3-cls-28" d="m243.71,198.42c-.08,1.15-1.08,2.02-2.23,1.94-1.15-.08-2.02-1.08-1.94-2.23.08-1.15,1.08-2.02,2.23-1.94,1.15.08,2.02,1.08,1.94,2.23Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="248.09" y="193.86" width="2.14" height="3.11" transform="translate(-1.55 1.99) rotate(-.46)"/>
                          <path className="level-3-cls-28" d="m251.27,198.29c0,1.15-.92,2.09-2.07,2.1-1.15,0-2.09-.92-2.1-2.07,0-1.15.92-2.1,2.07-2.1,1.15,0,2.09.92,2.1,2.07Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="255.84" y="192.97" width="2.14" height="3.11" transform="translate(-1.59 2.12) rotate(-.47)"/>
                          <path className="level-3-cls-28" d="m259.03,197.4c0,1.15-.92,2.1-2.07,2.1-1.15,0-2.09-.92-2.1-2.07,0-1.15.92-2.1,2.07-2.1,1.15,0,2.09.92,2.1,2.07Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="263.19" y="192.78" width="2.14" height="3.11" transform="translate(-14.49 21.43) rotate(-4.52)"/>
                          <path className="level-3-cls-28" d="m266.57,197.06c.09,1.15-.77,2.16-1.92,2.25-1.15.09-2.15-.77-2.25-1.92-.09-1.15.77-2.16,1.92-2.25,1.15-.09,2.15.77,2.25,1.92Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="271.14" y="191.82" width="2.14" height="3.11" transform="translate(-14.43 22.11) rotate(-4.53)"/>
                          <path className="level-3-cls-28" d="m274.52,196.1c.09,1.15-.77,2.16-1.92,2.25-1.15.09-2.15-.77-2.25-1.92-.09-1.15.77-2.16,1.92-2.25,1.15-.09,2.15.77,2.25,1.92Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="279.56" y="190.55" width="2.14" height="3.11" transform="translate(-14.31 22.79) rotate(-4.54)"/>
                          <path className="level-3-cls-28" d="m282.94,194.82c.09,1.15-.77,2.15-1.92,2.25-1.15.09-2.16-.77-2.25-1.92-.09-1.15.77-2.16,1.92-2.25,1.15-.09,2.15.77,2.25,1.92Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="287.04" y="188.91" width="2.14" height="3.11" transform="translate(-33.42 64.36) rotate(-12.05)"/>
                          <path className="level-3-cls-28" d="m290.76,192.85c.24,1.13-.48,2.24-1.61,2.48-1.12.24-2.24-.48-2.48-1.61-.24-1.13.48-2.24,1.61-2.48,1.13-.24,2.23.48,2.48,1.61Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="295.31" y="186.93" width="2.14" height="3.11" transform="translate(-42.91 97.67) rotate(-17.47)"/>
                          <path className="level-3-cls-28" d="m299.24,190.61c.34,1.1-.27,2.27-1.37,2.62-1.1.35-2.27-.27-2.62-1.37-.35-1.1.27-2.27,1.37-2.62,1.1-.35,2.27.27,2.62,1.37Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="302.08" y="185.21" width="2.14" height="3.11" transform="translate(-42.12 99.76) rotate(-17.49)"/>
                          <path className="level-3-cls-28" d="m306.01,188.9c.35,1.1-.26,2.27-1.37,2.62-1.1.35-2.27-.27-2.62-1.37-.35-1.1.26-2.27,1.37-2.62,1.1-.35,2.27.27,2.62,1.37Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="308.84" y="182.75" width="2.14" height="3.11" transform="translate(-41.08 101.75) rotate(-17.5)"/>
                          <path className="level-3-cls-28" d="m312.77,186.43c.35,1.1-.26,2.27-1.37,2.62-1.1.35-2.27-.27-2.62-1.37-.35-1.1.27-2.27,1.37-2.62,1.1-.35,2.27.27,2.62,1.37Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="315.36" y="180.27" width="2.14" height="3.11" transform="translate(-39.99 103.4) rotate(-17.47)"/>
                          <path className="level-3-cls-28" d="m319.29,183.96c.34,1.1-.27,2.27-1.37,2.62-1.1.35-2.27-.27-2.62-1.37-.35-1.1.27-2.27,1.37-2.62,1.1-.35,2.27.27,2.62,1.37Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="322.24" y="177.9" width="2.14" height="3.11" transform="translate(-38.96 105.35) rotate(-17.47)"/>
                          <path className="level-3-cls-28" d="m326.17,181.58c.34,1.1-.27,2.27-1.37,2.62-1.1.35-2.27-.27-2.62-1.37-.35-1.1.27-2.27,1.37-2.62,1.1-.35,2.27.27,2.62,1.37Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="328.05" y="175.46" width="2.14" height="3.11" transform="translate(-37.98 107.05) rotate(-17.48)"/>
                          <path className="level-3-cls-28" d="m331.98,179.14c.35,1.1-.27,2.27-1.37,2.62-1.1.35-2.27-.27-2.62-1.37-.35-1.1.26-2.27,1.36-2.62,1.1-.35,2.27.27,2.62,1.37Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="334.81" y="172.13" width="2.14" height="3.11" transform="translate(-36.66 108.93) rotate(-17.48)"/>
                          <path className="level-3-cls-28" d="m338.74,175.82c.35,1.1-.27,2.27-1.37,2.62-1.1.35-2.27-.27-2.62-1.37-.35-1.1.26-2.27,1.36-2.62,1.1-.35,2.27.27,2.62,1.37Z"/>
                        </g>
                        <g>
                          <rect className="level-3-cls-28" x="341.13" y="168.91" width="2.14" height="3.11" transform="translate(-40.1 172.05) rotate(-26.72)"/>
                          <path className="level-3-cls-28" d="m345.37,172.11c.52,1.03.1,2.29-.93,2.8-1.03.52-2.29.1-2.8-.93-.52-1.03-.1-2.29.93-2.8,1.03-.52,2.28-.1,2.8.93Z"/>
                        </g>
                      </g>
                    </g>
                    <path className="level-3-cls-34" d="m141.44,150.76c0,1.97-1.59,3.56-3.56,3.56s-3.56-1.59-3.56-3.56,1.59-3.56,3.56-3.56,3.56,1.59,3.56,3.56Z"/>
                    <path className="level-3-cls-34" d="m359.04,150.76c0,1.97-1.59,3.56-3.56,3.56s-3.56-1.59-3.56-3.56,1.59-3.56,3.56-3.56,3.56,1.59,3.56,3.56Z"/>
                  </g>
                  <g>
                    <rect className="level-3-cls-25" x="192.58" y="243.11" width="47.25" height="15.19"/>
                    <path className="level-3-cls-5" d="m239.83,243.11c-.19.05-.46.72-1.66,1.06-2.72.75-2.84-.06-4.27-.02-1.89.05-3.37.88-4.94,1.84-2.57,1.57-5.34,2.71-8.4,2.67-1.63-.02-3.29-.3-4.81-.94-1.32-.56-2.46-1.34-3.69-2.06-.96-.56-2.06-1.12-3.21-.93-.85.14-1.62.45-2.37.84-1.23.65-2.47,1.37-3.82,1.75-1.25.35-3.13.69-4.36.06-.44-.22-.79-.43-1.08-.85-.44-.62-.81-1.42-1.67-1.48-1.01-.08-1.97-.26-2.95-.29v-.72l47.25-.92Z"/>
                    <path className="level-3-cls-34" d="m239.18,237.91c-1.82-.59-.03-2.72-1.07-3.69-1.69-1.59-4.64.76-6.43.77-1.76,0-2.52-2-2.79-3.4-.22-1.15-.38-2.24-1.05-3.23-1.26-1.86-4.13-2.09-6.13-1.77-2.75.45-4.27,2.74-6.54,4.03-1.39.79-3.41,1.15-4.8.17-1-.69-1.51-1.97-2.33-2.85-1.51-1.62-4.04-1.25-5.76-.2-1.14.7-1.94,1.53-2.63,2.68-.69,1.14-1.17,2.39-2.01,3.43-.14.17-.3.31-.47.43-.04-.03-.08-.05-.15-.05-3.99-.11-9.56,3.67-7.37,8.18.44.9,1.27,1.52,2.2,1.82,1.37.45,2.67-.11,4.05,0,.86.07,1.24.87,1.67,1.48.29.42.64.63,1.08.85,1.23.62,3.11.28,4.36-.07,1.35-.38,2.59-1.1,3.82-1.74.76-.4,1.52-.71,2.37-.84,1.15-.19,2.25.38,3.21.93,1.23.72,2.37,1.5,3.69,2.06,1.52.64,3.17.91,4.81.94,3.06.04,5.84-1.1,8.4-2.66,1.58-.96,3.05-1.79,4.94-1.84,1.43-.04,2.85.27,4.27.02,2.06-.37,3.62-1.69,3.66-3.86.03-1.69-1.94-1.25-3-1.59Z"/>
                    <path className="level-3-cls-28" d="m195.97,243.11c1.22-1.38,3.29-2.25,4.99-2.2.05,0,.08.02.11.04.13-.09.26-.2.36-.33.65-.8,1.02-1.76,1.55-2.64.53-.88,1.14-1.51,2.02-2.06,1.32-.81,3.27-1.09,4.43.15.63.67,1.02,1.66,1.79,2.19,1.07.75,2.62.48,3.69-.13,1.75-.99,2.92-2.75,5.03-3.1,1.54-.26,3.74-.08,4.71,1.35.52.76.64,1.6.81,2.48.21,1.07.79,2.62,2.14,2.61,1.38,0,3.65-1.81,4.95-.59.51.48.14,1.33.16,1.99h.61c1.35-.38,2.33-1.36,2.36-2.87.02-1.3-1.49-.96-2.31-1.23-1.4-.46-.02-2.09-.83-2.84-1.3-1.22-3.57.58-4.95.59-1.36,0-1.94-1.54-2.14-2.61-.17-.88-.3-1.72-.81-2.48-.97-1.43-3.17-1.61-4.71-1.36-2.11.34-3.28,2.11-5.03,3.1-1.07.61-2.62.88-3.69.13-.77-.53-1.16-1.52-1.79-2.19-1.16-1.24-3.11-.96-4.43-.15-.88.54-1.49,1.17-2.02,2.06-.53.88-.9,1.84-1.55,2.63-.11.13-.23.24-.36.33-.03-.02-.06-.04-.11-.04-3.07-.08-7.35,2.82-5.67,6.3.16.33.4.62.67.85Z"/>
                    <g>
                      <path className="level-3-cls-16" d="m195.59,239.54c.07.02.14.04.22.05.41.06.8-.24.8-.24,0,0-.28-.41-.69-.47-.08,0-.16-.02-.23-.02.06-.03.12-.06.19-.11.33-.22.36-.7.36-.7,0,0-.5-.11-.83.11-.06.04-.12.09-.17.14.02-.06.04-.13.05-.2.06-.38-.28-.74-.28-.74,0,0-.44.25-.49.62-.01.08-.01.15-.01.21-.03-.06-.07-.12-.12-.18-.25-.31-.76-.35-.76-.35,0,0-.11.46.14.78.05.06.1.11.15.16-.07-.02-.14-.04-.22-.05-.41-.06-.8.24-.8.24,0,0,.28.41.69.47.08.01.16.02.23.02-.06.03-.13.06-.19.1-.33.22-.37.7-.37.7,0,0,.5.11.83-.11.06-.04.12-.09.17-.14-.02.06-.04.13-.05.2-.06.38.28.74.28.74,0,0,.43-.25.49-.63.01-.07.02-.14.01-.21.03.06.07.12.12.18.25.31.76.35.76.35,0,0,.11-.46-.14-.77-.05-.06-.1-.11-.15-.16Z"/>
                      <path className="level-3-cls-16" d="m205.1,229.94s.08.02.13.03c.25.04.48-.15.48-.15,0,0-.17-.24-.41-.28-.05,0-.09,0-.14,0,.04-.02.08-.04.11-.06.2-.13.22-.42.22-.42,0,0-.3-.07-.5.07-.04.03-.07.05-.1.08.01-.04.02-.08.03-.12.03-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.05,0,.09,0,.13-.02-.03-.04-.07-.07-.1-.15-.18-.45-.21-.45-.21,0,0-.07.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.24-.04-.47.15-.47.15,0,0,.17.24.41.28.05,0,.09,0,.14,0-.04.02-.07.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.07.5-.07.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.04.23.17.45.17.45,0,0,.26-.15.29-.37,0-.04,0-.09,0-.13.02.04.04.07.07.11.15.19.45.21.45.21,0,0,.07-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m207.32,237.44s.08.02.13.03c.25.04.48-.15.48-.15,0,0-.16-.24-.41-.28-.05,0-.09-.01-.14,0,.04-.02.07-.04.11-.06.2-.13.22-.42.22-.42,0,0-.3-.07-.5.07-.04.03-.07.05-.1.08.01-.04.02-.08.03-.12.03-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.12-.02-.03-.04-.07-.07-.1-.15-.19-.46-.21-.46-.21,0,0-.06.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.24-.04-.48.14-.48.14,0,0,.17.24.41.28.05,0,.09,0,.14,0-.04.02-.07.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.06.5-.07.04-.02.07-.05.1-.08-.01.04-.02.08-.03.12-.04.22.17.44.17.44,0,0,.26-.15.29-.37,0-.04,0-.08,0-.13.02.04.04.07.07.11.15.19.45.21.45.21,0,0,.07-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m223.17,228.92s.08.02.13.03c.25.04.47-.15.47-.15,0,0-.17-.24-.41-.28-.05,0-.09,0-.14,0,.04-.02.08-.04.11-.06.2-.13.22-.42.22-.42,0,0-.3-.07-.5.07-.04.02-.07.05-.1.08.01-.04.02-.08.03-.12.03-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.13-.02-.04-.04-.07-.07-.11-.15-.18-.46-.21-.46-.21,0,0-.06.27.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.24-.04-.47.14-.47.14,0,0,.17.24.41.28.05,0,.09,0,.14,0-.04.02-.08.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.07.5-.07.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.04.23.17.44.17.44,0,0,.26-.15.29-.37,0-.04,0-.09,0-.13.02.03.04.07.07.1.15.19.46.21.46.21,0,0,.06-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m223.17,245.68s.08.02.13.03c.25.04.47-.15.47-.15,0,0-.17-.24-.41-.28-.05,0-.09-.01-.14-.01.04-.02.08-.04.11-.06.2-.13.22-.42.22-.42,0,0-.3-.06-.5.07-.04.03-.07.05-.1.08.01-.04.02-.08.03-.12.03-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.13-.02-.04-.04-.07-.07-.11-.15-.18-.46-.21-.46-.21,0,0-.06.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.24-.04-.47.15-.47.15,0,0,.17.24.41.28.05,0,.09.01.14.01-.04.02-.08.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.07.5-.07.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.04.23.17.44.17.44,0,0,.26-.15.29-.37,0-.04,0-.09,0-.13.02.04.04.07.07.11.15.19.46.21.46.21,0,0,.06-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m236.36,236.83s.08.02.13.03c.24.03.47-.15.47-.15,0,0-.16-.24-.41-.28-.05,0-.09,0-.14,0,.04-.02.08-.04.11-.07.2-.13.22-.41.22-.41,0,0-.3-.07-.5.07-.04.02-.07.05-.1.08.01-.04.02-.08.03-.12.04-.22-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.13-.02-.04-.04-.07-.07-.11-.15-.19-.46-.21-.46-.21,0,0-.06.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.24-.04-.48.14-.48.14,0,0,.17.24.41.28.05,0,.09.01.14.01-.04.02-.07.04-.11.06-.2.13-.22.41-.22.41,0,0,.3.07.5-.06.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.04.23.17.44.17.44,0,0,.26-.15.29-.38,0-.04,0-.09,0-.12.02.03.04.07.07.11.15.19.45.21.45.21,0,0,.07-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m239.22,241.06s.09.02.13.03c.25.04.48-.14.48-.14,0,0-.17-.24-.41-.28-.05,0-.09-.01-.14-.01.04-.02.07-.04.11-.06.2-.13.22-.42.22-.42,0,0-.3-.07-.5.07-.04.02-.07.05-.1.08.01-.04.02-.08.03-.12.04-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.13-.02-.04-.04-.07-.07-.11-.15-.19-.46-.21-.46-.21,0,0-.07.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.25-.04-.48.15-.48.15,0,0,.17.24.41.28.05,0,.09.01.14.01-.04.02-.07.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.07.5-.07.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.03.23.17.44.17.44,0,0,.26-.15.29-.37,0-.04,0-.09,0-.13.02.04.04.07.07.11.15.19.45.21.45.21,0,0,.06-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m227.72,234.04s.08.02.13.03c.24.04.48-.14.48-.14,0,0-.17-.24-.41-.28-.05,0-.09-.01-.14,0,.04-.02.07-.04.11-.07.2-.13.22-.41.22-.41,0,0-.3-.07-.5.07-.04.03-.07.05-.1.08.01-.04.02-.08.03-.12.04-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.13-.02-.03-.04-.07-.07-.1-.15-.19-.46-.21-.46-.21,0,0-.07.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.25-.04-.48.14-.48.14,0,0,.17.24.41.28.05,0,.09,0,.14,0-.04.02-.07.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.06.5-.07.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.03.23.17.44.17.44,0,0,.26-.15.29-.37,0-.04,0-.09,0-.13.02.04.04.07.07.11.15.18.46.21.46.21,0,0,.06-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m202.34,242.33c.06.02.13.04.2.04.39.06.75-.23.75-.23,0,0-.26-.38-.65-.44-.07-.01-.15-.02-.22-.02.06-.03.12-.06.18-.1.31-.21.34-.65.34-.65,0,0-.47-.11-.79.1-.06.04-.11.09-.16.13.02-.06.04-.12.05-.19.05-.36-.26-.7-.26-.7,0,0-.41.23-.46.59-.01.07-.02.14-.01.2-.03-.06-.07-.11-.11-.17-.23-.29-.72-.33-.72-.33,0,0-.1.43.13.73.04.06.09.11.14.15-.06-.02-.13-.04-.2-.05-.39-.06-.75.23-.75.23,0,0,.26.38.65.44.07.01.15.02.22.02-.06.03-.12.06-.18.1-.31.21-.34.66-.34.66,0,0,.47.1.79-.11.06-.04.11-.08.16-.13-.02.06-.04.12-.04.19-.06.35.26.7.26.7,0,0,.41-.23.46-.59.01-.07.01-.14.01-.2.03.05.07.11.11.16.23.29.72.33.72.33,0,0,.1-.43-.13-.73-.05-.06-.09-.11-.15-.15Z"/>
                      <path className="level-3-cls-16" d="m213.98,242.33c.06.02.13.04.2.04.38.06.75-.23.75-.23,0,0-.26-.38-.65-.44-.07-.01-.15-.02-.22-.02.06-.03.12-.06.17-.1.31-.21.34-.65.34-.65,0,0-.47-.11-.78.1-.06.04-.12.09-.16.13.02-.06.04-.12.05-.19.05-.36-.26-.7-.26-.7,0,0-.41.23-.46.59-.01.07-.02.14-.01.2-.03-.06-.07-.11-.11-.17-.23-.29-.72-.33-.72-.33,0,0-.1.43.13.73.04.06.09.11.14.15-.06-.02-.13-.04-.2-.05-.38-.06-.75.23-.75.23,0,0,.26.38.65.44.07.01.15.02.22.02-.06.03-.12.06-.18.1-.31.21-.34.66-.34.66,0,0,.47.1.78-.11.06-.04.11-.08.16-.13-.02.06-.04.12-.04.19-.06.35.26.7.26.7,0,0,.41-.23.46-.59,0-.07.01-.14.01-.2.03.05.07.11.11.16.23.29.72.33.72.33,0,0,.1-.43-.13-.73-.04-.06-.09-.11-.14-.15Z"/>
                      <path className="level-3-cls-16" d="m222.24,239.98c.06.02.13.04.2.05.39.06.75-.23.75-.23,0,0-.26-.38-.65-.44-.08-.01-.15-.02-.22-.02.06-.03.12-.06.17-.1.31-.21.34-.66.34-.66,0,0-.47-.1-.78.11-.06.04-.12.09-.16.13.02-.06.04-.12.05-.19.05-.36-.26-.7-.26-.7,0,0-.41.23-.46.59,0,.07-.01.14-.01.2-.03-.06-.07-.11-.11-.17-.24-.29-.72-.33-.72-.33,0,0-.1.43.13.73.04.06.09.11.14.15-.07-.02-.13-.04-.2-.05-.39-.06-.75.23-.75.23,0,0,.26.38.65.44.07.01.15.02.22.02-.06.03-.12.06-.18.1-.31.21-.34.65-.34.65,0,0,.47.1.78-.1.06-.04.11-.09.16-.13-.02.06-.04.12-.05.19-.06.36.26.7.26.7,0,0,.41-.23.46-.59.01-.07.01-.14.01-.2.03.06.07.11.11.17.23.29.72.33.72.33,0,0,.1-.44-.13-.73-.05-.06-.1-.11-.14-.15Z"/>
                    </g>
                  </g>
                  <g>
                    <rect className="level-3-cls-25" x="113.7" y="243.11" width="47.25" height="15.19"/>
                    <path className="level-3-cls-5" d="m160.95,243.11c-.19.05-.46.72-1.66,1.06-2.72.76-2.84-.06-4.27-.02-1.89.05-3.37.88-4.94,1.84-2.57,1.57-5.34,2.71-8.4,2.67-1.63-.02-3.29-.3-4.81-.94-1.32-.56-2.45-1.34-3.69-2.06-.96-.56-2.06-1.12-3.21-.93-.85.14-1.62.45-2.37.84-1.23.65-2.47,1.37-3.82,1.75-1.25.35-3.13.69-4.36.06-.44-.22-.79-.43-1.08-.85-.44-.62-.81-1.42-1.67-1.48-1.01-.08-1.97-.26-2.95-.29v-.72l47.25-.92Z"/>
                    <path className="level-3-cls-34" d="m160.3,237.91c-1.82-.59-.03-2.72-1.07-3.69-1.69-1.59-4.64.76-6.43.77-1.76,0-2.52-2-2.79-3.4-.22-1.15-.38-2.24-1.05-3.23-1.26-1.86-4.13-2.09-6.13-1.77-2.75.45-4.27,2.74-6.54,4.03-1.39.79-3.41,1.15-4.8.17-1-.69-1.51-1.97-2.33-2.85-1.51-1.62-4.04-1.25-5.76-.2-1.14.7-1.94,1.53-2.63,2.68-.69,1.14-1.17,2.39-2.01,3.43-.14.17-.3.31-.47.43-.04-.03-.08-.05-.15-.05-3.99-.11-9.56,3.66-7.37,8.18.44.9,1.27,1.52,2.2,1.82,1.37.45,2.67-.11,4.05,0,.86.07,1.24.87,1.67,1.48.29.42.64.63,1.08.85,1.23.62,3.11.28,4.36-.07,1.35-.38,2.59-1.1,3.82-1.74.76-.4,1.52-.71,2.37-.84,1.15-.19,2.25.38,3.21.93,1.23.72,2.37,1.5,3.69,2.06,1.52.64,3.17.91,4.81.94,3.06.04,5.84-1.1,8.4-2.66,1.58-.96,3.05-1.79,4.94-1.84,1.43-.04,2.85.27,4.27.02,2.06-.37,3.62-1.69,3.66-3.86.03-1.69-1.94-1.25-3-1.59Z"/>
                    <path className="level-3-cls-28" d="m117.08,243.11c1.22-1.38,3.29-2.25,4.99-2.2.05,0,.08.02.11.04.13-.09.26-.2.36-.33.65-.8,1.02-1.76,1.55-2.64.53-.88,1.14-1.51,2.02-2.06,1.32-.81,3.27-1.09,4.43.15.63.67,1.02,1.66,1.79,2.19,1.07.75,2.62.48,3.69-.13,1.75-.99,2.92-2.75,5.03-3.1,1.54-.26,3.74-.08,4.71,1.35.52.76.64,1.6.81,2.48.21,1.07.79,2.62,2.14,2.61,1.38,0,3.65-1.81,4.95-.59.51.48.14,1.33.16,1.99h.61c1.35-.38,2.33-1.36,2.36-2.87.02-1.3-1.49-.96-2.31-1.23-1.4-.46-.02-2.09-.83-2.84-1.3-1.22-3.57.58-4.95.59-1.36,0-1.94-1.54-2.14-2.61-.17-.88-.3-1.72-.81-2.48-.97-1.43-3.17-1.61-4.71-1.36-2.11.34-3.28,2.1-5.03,3.1-1.07.61-2.62.88-3.69.14-.77-.53-1.16-1.52-1.79-2.19-1.16-1.24-3.11-.96-4.43-.15-.88.54-1.49,1.17-2.02,2.06-.53.88-.9,1.84-1.55,2.63-.11.13-.23.24-.36.33-.03-.02-.06-.04-.11-.04-3.07-.08-7.35,2.82-5.67,6.3.16.33.4.62.67.85Z"/>
                    <g>
                      <path className="level-3-cls-16" d="m116.71,239.54c.07.02.14.04.22.05.41.06.8-.24.8-.24,0,0-.28-.41-.69-.47-.08-.01-.16-.02-.23-.02.06-.03.12-.06.19-.11.33-.22.36-.7.36-.7,0,0-.5-.11-.83.11-.06.04-.12.09-.17.14.02-.06.04-.13.05-.2.06-.38-.28-.74-.28-.74,0,0-.44.25-.49.63-.01.07-.01.15-.01.21-.03-.06-.07-.12-.12-.18-.25-.31-.76-.35-.76-.35,0,0-.11.46.14.78.05.06.1.11.15.16-.07-.02-.14-.04-.22-.05-.41-.06-.8.24-.8.24,0,0,.28.41.69.47.08.01.16.02.23.02-.06.03-.13.06-.19.1-.33.22-.37.7-.37.7,0,0,.5.11.83-.11.06-.04.12-.09.17-.14-.02.06-.04.13-.05.2-.06.38.28.74.28.74,0,0,.43-.25.49-.63.01-.07.02-.14.01-.21.03.06.07.12.12.18.25.31.76.35.76.35,0,0,.11-.46-.14-.77-.05-.06-.1-.11-.15-.16Z"/>
                      <path className="level-3-cls-16" d="m126.22,229.94s.08.02.13.03c.25.04.48-.15.48-.15,0,0-.17-.24-.41-.28-.05,0-.09,0-.14,0,.04-.02.08-.04.11-.06.2-.13.22-.42.22-.42,0,0-.3-.07-.5.07-.04.03-.07.05-.1.08.01-.04.02-.08.03-.12.03-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.05,0,.09,0,.13-.02-.03-.04-.07-.07-.1-.15-.18-.45-.21-.45-.21,0,0-.07.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.24-.04-.47.15-.47.15,0,0,.17.24.41.28.05,0,.09,0,.14,0-.04.02-.07.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.07.5-.07.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.04.23.17.45.17.45,0,0,.26-.15.29-.37,0-.04,0-.09,0-.13.02.04.04.07.07.11.15.19.45.21.45.21,0,0,.07-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m128.44,237.44s.08.02.13.03c.25.04.48-.15.48-.15,0,0-.16-.24-.41-.28-.05,0-.09-.01-.14,0,.04-.02.07-.04.11-.06.2-.13.22-.42.22-.42,0,0-.3-.07-.5.07-.04.03-.07.05-.1.08.01-.04.02-.08.03-.12.03-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.13-.02-.03-.04-.07-.07-.1-.15-.19-.46-.21-.46-.21,0,0-.06.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.24-.04-.48.14-.48.14,0,0,.17.24.41.28.05,0,.09,0,.14,0-.04.02-.07.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.07.5-.07.04-.02.07-.05.1-.08-.01.04-.02.08-.03.12-.04.22.17.44.17.44,0,0,.26-.15.29-.37,0-.04,0-.08,0-.13.02.04.04.07.07.1.15.19.46.21.46.21,0,0,.07-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m144.28,228.91s.08.02.13.03c.25.04.47-.15.47-.15,0,0-.17-.24-.41-.28-.05,0-.09,0-.14,0,.04-.02.08-.04.11-.06.2-.13.22-.42.22-.42,0,0-.3-.07-.5.07-.04.02-.07.05-.1.08.01-.04.02-.08.03-.12.03-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.13-.02-.03-.04-.07-.07-.11-.15-.18-.46-.21-.46-.21,0,0-.06.27.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.24-.04-.47.15-.47.15,0,0,.17.24.41.28.05,0,.09,0,.14,0-.04.02-.08.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.07.5-.07.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.04.23.17.44.17.44,0,0,.26-.15.29-.37,0-.04,0-.09,0-.13.02.03.04.07.07.1.15.19.46.21.46.21,0,0,.06-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m144.28,245.68s.08.02.13.03c.25.04.47-.15.47-.15,0,0-.17-.24-.41-.28-.05,0-.09-.01-.14-.01.04-.02.08-.04.11-.06.2-.13.22-.42.22-.42,0,0-.3-.06-.5.07-.04.03-.07.05-.1.08.01-.04.02-.08.03-.12.03-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.13-.02-.04-.04-.07-.07-.11-.15-.18-.46-.21-.46-.21,0,0-.06.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.24-.04-.47.15-.47.15,0,0,.17.24.41.28.05,0,.09.01.14.01-.04.02-.08.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.07.5-.07.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.04.23.17.44.17.44,0,0,.26-.15.29-.37,0-.04,0-.09,0-.13.02.04.04.07.07.11.15.19.46.21.46.21,0,0,.06-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m157.48,236.83s.08.02.13.03c.24.03.47-.15.47-.15,0,0-.16-.24-.41-.28-.05,0-.09,0-.14,0,.04-.02.08-.04.11-.07.2-.13.22-.41.22-.41,0,0-.3-.07-.5.07-.04.02-.07.05-.1.08.01-.04.02-.08.03-.12.04-.22-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.08,0,.13-.02-.04-.04-.07-.07-.11-.15-.19-.46-.21-.46-.21,0,0-.06.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.24-.04-.48.14-.48.14,0,0,.17.24.41.28.05,0,.09.01.14.01-.04.02-.07.04-.11.06-.2.13-.22.41-.22.41,0,0,.3.07.5-.06.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.04.23.17.44.17.44,0,0,.26-.15.29-.38,0-.04,0-.09,0-.13.02.03.04.07.07.11.15.19.46.21.46.21,0,0,.07-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m160.34,241.06s.09.02.13.03c.25.04.48-.14.48-.14,0,0-.17-.24-.41-.28-.05,0-.09-.01-.14-.01.04-.02.07-.04.11-.06.2-.13.22-.41.22-.41,0,0-.3-.07-.5.07-.04.02-.07.05-.1.08.01-.04.02-.08.03-.12.04-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.13-.02-.04-.04-.07-.07-.1-.15-.19-.46-.21-.46-.21,0,0-.07.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.25-.04-.48.15-.48.15,0,0,.17.24.41.28.05,0,.09.01.14.01-.04.02-.07.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.07.5-.07.04-.02.07-.05.1-.08-.01.04-.02.08-.03.12-.03.23.17.44.17.44,0,0,.26-.15.29-.37,0-.04,0-.09,0-.13.02.04.04.07.07.11.15.19.45.21.45.21,0,0,.06-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m148.83,234.04s.08.02.13.03c.24.04.48-.15.48-.15,0,0-.17-.24-.41-.28-.05,0-.09-.01-.14,0,.04-.02.07-.04.11-.07.2-.13.22-.41.22-.41,0,0-.3-.07-.5.07-.04.03-.07.05-.1.08.01-.04.02-.08.03-.12.04-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.13-.02-.03-.04-.07-.07-.1-.15-.19-.45-.21-.45-.21,0,0-.07.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.25-.04-.48.14-.48.14,0,0,.17.24.41.28.05,0,.09,0,.14,0-.04.02-.07.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.06.5-.07.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.03.23.17.44.17.44,0,0,.26-.15.29-.37,0-.04,0-.09,0-.13.02.04.04.07.07.11.15.18.45.21.45.21,0,0,.06-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m123.46,242.33c.06.02.13.04.2.04.39.06.75-.23.75-.23,0,0-.26-.38-.65-.44-.07-.01-.15-.02-.22-.02.06-.03.12-.06.18-.1.31-.21.34-.65.34-.65,0,0-.47-.11-.79.1-.06.04-.11.09-.16.13.02-.06.04-.12.05-.19.05-.36-.26-.7-.26-.7,0,0-.41.23-.46.59-.01.07-.02.14-.01.2-.03-.06-.07-.11-.11-.17-.23-.29-.72-.33-.72-.33,0,0-.1.43.13.73.04.06.09.11.14.15-.06-.02-.13-.04-.2-.05-.39-.06-.75.23-.75.23,0,0,.26.38.65.44.07.01.15.02.22.02-.06.03-.12.06-.18.1-.31.21-.34.66-.34.66,0,0,.47.1.79-.11.06-.04.11-.08.16-.13-.02.06-.04.12-.04.19-.06.35.26.7.26.7,0,0,.41-.23.46-.59.01-.07.01-.14.01-.2.03.05.07.11.11.16.23.29.72.33.72.33,0,0,.1-.43-.13-.73-.05-.06-.09-.11-.15-.15Z"/>
                      <path className="level-3-cls-16" d="m135.1,242.33c.06.02.13.04.2.04.38.06.75-.23.75-.23,0,0-.26-.38-.65-.44-.07-.01-.15-.02-.22-.02.06-.03.12-.06.17-.1.31-.21.34-.65.34-.65,0,0-.47-.11-.78.1-.06.04-.12.09-.16.13.02-.06.04-.12.05-.19.05-.36-.26-.7-.26-.7,0,0-.41.23-.46.59-.01.07-.02.14-.01.2-.03-.06-.07-.11-.11-.17-.23-.29-.72-.33-.72-.33,0,0-.1.43.13.73.04.06.09.11.14.15-.06-.02-.13-.04-.2-.05-.38-.06-.75.23-.75.23,0,0,.26.38.65.44.07.01.15.02.22.02-.06.03-.12.06-.18.1-.31.21-.34.66-.34.66,0,0,.47.1.78-.11.06-.04.11-.08.16-.13-.02.06-.04.12-.04.19-.06.35.26.7.26.7,0,0,.41-.23.46-.59,0-.07.01-.14.01-.2.03.05.07.11.11.16.23.29.72.33.72.33,0,0,.1-.43-.13-.73-.04-.06-.09-.11-.14-.15Z"/>
                      <path className="level-3-cls-16" d="m143.36,239.98c.06.02.13.04.2.05.39.06.75-.23.75-.23,0,0-.26-.38-.65-.44-.08-.01-.15-.02-.22-.02.06-.03.12-.06.17-.1.31-.21.34-.65.34-.65,0,0-.47-.1-.78.11-.06.04-.12.09-.16.13.02-.06.04-.12.05-.19.05-.36-.26-.7-.26-.7,0,0-.41.23-.46.59,0,.07-.01.14-.01.2-.03-.06-.07-.11-.11-.17-.24-.29-.72-.33-.72-.33,0,0-.1.43.13.73.04.06.09.11.14.15-.07-.02-.13-.04-.2-.05-.39-.06-.75.23-.75.23,0,0,.26.38.65.44.07.01.15.02.22.02-.06.03-.12.06-.18.1-.31.21-.34.65-.34.65,0,0,.47.1.78-.1.06-.04.11-.09.16-.13-.02.06-.04.12-.05.19-.06.36.26.7.26.7,0,0,.41-.23.46-.59.01-.07.01-.14.01-.2.03.06.07.11.11.17.23.29.72.33.72.33,0,0,.1-.44-.13-.73-.05-.06-.1-.11-.14-.15Z"/>
                    </g>
                  </g>
                  <g>
                    <rect className="level-3-cls-25" x="34.81" y="243.11" width="47.25" height="15.19"/>
                    <path className="level-3-cls-5" d="m82.06,243.11c-.19.05-.46.72-1.66,1.06-2.72.76-2.84-.06-4.27-.02-1.89.05-3.37.88-4.94,1.84-2.57,1.57-5.34,2.71-8.4,2.67-1.63-.02-3.29-.3-4.81-.94-1.32-.56-2.46-1.34-3.69-2.06-.96-.56-2.06-1.12-3.21-.93-.85.14-1.62.45-2.37.84-1.23.65-2.47,1.37-3.82,1.75-1.25.35-3.13.69-4.36.06-.44-.22-.79-.43-1.09-.85-.44-.62-.81-1.42-1.67-1.48-1.01-.08-1.97-.26-2.95-.29v-.72l47.25-.92Z"/>
                    <path className="level-3-cls-34" d="m81.42,237.91c-1.82-.59-.03-2.72-1.07-3.69-1.69-1.59-4.64.76-6.43.77-1.76,0-2.52-2-2.79-3.4-.22-1.15-.38-2.24-1.05-3.23-1.26-1.86-4.13-2.09-6.13-1.77-2.75.45-4.27,2.74-6.54,4.03-1.39.79-3.41,1.15-4.8.17-1-.69-1.51-1.97-2.33-2.85-1.51-1.62-4.04-1.25-5.76-.2-1.14.7-1.94,1.53-2.63,2.68-.69,1.14-1.17,2.39-2.01,3.43-.14.17-.3.31-.47.43-.04-.03-.08-.05-.15-.05-3.99-.11-9.56,3.66-7.37,8.18.44.9,1.27,1.52,2.2,1.82,1.37.45,2.67-.11,4.05,0,.86.07,1.24.87,1.67,1.48.29.42.64.63,1.08.85,1.23.62,3.11.28,4.36-.07,1.35-.38,2.59-1.1,3.82-1.74.76-.4,1.52-.71,2.37-.84,1.15-.19,2.25.38,3.21.93,1.23.72,2.37,1.5,3.69,2.06,1.52.64,3.17.91,4.81.94,3.06.04,5.84-1.1,8.4-2.66,1.58-.96,3.05-1.79,4.94-1.84,1.43-.04,2.85.27,4.27.02,2.06-.37,3.62-1.69,3.66-3.86.03-1.69-1.94-1.25-3-1.59Z"/>
                    <path className="level-3-cls-28" d="m38.2,243.11c1.22-1.38,3.29-2.25,4.99-2.2.05,0,.08.02.11.04.13-.09.26-.2.36-.33.65-.8,1.02-1.76,1.55-2.64.53-.88,1.14-1.51,2.02-2.06,1.32-.81,3.27-1.09,4.43.15.63.67,1.02,1.66,1.79,2.19,1.07.75,2.62.48,3.69-.13,1.75-.99,2.92-2.75,5.03-3.1,1.54-.26,3.74-.08,4.71,1.35.52.76.64,1.6.81,2.48.21,1.07.79,2.62,2.14,2.61,1.38,0,3.65-1.81,4.95-.59.51.48.14,1.33.17,1.99h.61c1.35-.38,2.33-1.36,2.36-2.87.02-1.3-1.49-.96-2.31-1.23-1.4-.46-.02-2.09-.83-2.84-1.3-1.22-3.57.58-4.95.59-1.36,0-1.94-1.54-2.14-2.61-.17-.88-.3-1.72-.81-2.48-.97-1.43-3.17-1.61-4.71-1.36-2.11.34-3.28,2.1-5.03,3.1-1.07.61-2.62.88-3.69.14-.77-.53-1.16-1.52-1.79-2.19-1.16-1.24-3.11-.96-4.43-.15-.88.54-1.49,1.17-2.02,2.06-.53.88-.9,1.84-1.55,2.63-.11.13-.23.24-.36.33-.03-.02-.06-.04-.11-.04-3.07-.08-7.35,2.82-5.67,6.3.16.33.4.62.67.85Z"/>
                    <g>
                      <path className="level-3-cls-16" d="m37.83,239.54c.07.02.14.04.22.05.41.06.8-.24.8-.24,0,0-.28-.41-.69-.47-.08-.01-.16-.02-.23-.02.06-.03.12-.06.19-.11.33-.22.36-.7.36-.7,0,0-.5-.11-.83.11-.06.04-.12.09-.17.14.02-.06.04-.13.05-.2.06-.38-.28-.74-.28-.74,0,0-.44.25-.49.63-.01.07-.01.15-.01.21-.03-.06-.07-.12-.12-.18-.25-.31-.76-.35-.76-.35,0,0-.11.46.14.78.05.06.1.11.15.16-.07-.02-.14-.04-.22-.05-.41-.06-.8.24-.8.24,0,0,.28.41.69.47.08.01.16.02.23.02-.06.03-.13.06-.19.1-.33.22-.37.7-.37.7,0,0,.5.11.83-.11.06-.04.12-.09.17-.14-.02.06-.04.13-.05.2-.06.38.28.74.28.74,0,0,.43-.25.49-.63.01-.07.02-.14.01-.21.03.06.07.12.12.18.25.31.76.35.76.35,0,0,.11-.46-.14-.77-.05-.06-.1-.11-.15-.16Z"/>
                      <path className="level-3-cls-16" d="m47.34,229.94s.08.02.13.03c.25.04.48-.15.48-.15,0,0-.16-.24-.41-.28-.05,0-.09,0-.14,0,.04-.02.08-.04.11-.06.2-.13.22-.42.22-.42,0,0-.3-.07-.5.07-.04.03-.07.05-.1.08.01-.04.02-.08.03-.12.03-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.05,0,.09,0,.13-.02-.03-.04-.07-.07-.1-.15-.18-.45-.21-.45-.21,0,0-.07.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.24-.04-.47.15-.47.15,0,0,.17.24.41.28.05,0,.09,0,.14,0-.04.02-.07.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.07.5-.07.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.04.23.17.45.17.45,0,0,.26-.15.29-.37,0-.04,0-.09,0-.13.02.04.04.07.07.11.15.19.45.21.45.21,0,0,.07-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m49.55,237.44s.08.02.13.03c.25.04.48-.15.48-.15,0,0-.17-.24-.41-.28-.05,0-.09-.01-.14,0,.04-.02.07-.04.11-.06.2-.13.22-.42.22-.42,0,0-.3-.07-.5.07-.04.03-.07.05-.1.08.01-.04.02-.08.03-.12.03-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.13-.02-.03-.04-.07-.07-.1-.15-.19-.46-.21-.46-.21,0,0-.06.28.09.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.24-.04-.48.14-.48.14,0,0,.17.24.41.28.05,0,.09,0,.14,0-.04.02-.07.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.07.5-.07.04-.02.07-.05.1-.08-.01.04-.02.08-.03.12-.04.22.17.44.17.44,0,0,.26-.15.29-.37,0-.04,0-.08,0-.13.02.04.05.07.07.1.15.19.46.21.46.21,0,0,.07-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m65.4,228.91s.08.02.13.03c.25.04.47-.15.47-.15,0,0-.16-.24-.41-.28-.05,0-.09,0-.14,0,.04-.02.08-.04.11-.06.2-.13.22-.42.22-.42,0,0-.3-.07-.5.07-.04.02-.07.05-.1.08.01-.04.02-.08.03-.12.03-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.13-.02-.03-.04-.07-.07-.11-.15-.18-.46-.21-.46-.21,0,0-.06.27.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.24-.04-.47.15-.47.15,0,0,.17.24.41.28.05,0,.09,0,.14,0-.04.02-.08.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.07.5-.07.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.04.23.17.44.17.44,0,0,.26-.15.29-.37,0-.04,0-.09,0-.13.02.03.04.07.07.1.15.19.45.21.45.21,0,0,.06-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m65.4,245.68s.08.02.13.03c.25.04.47-.15.47-.15,0,0-.16-.24-.41-.28-.05,0-.09-.01-.14-.01.04-.02.08-.04.11-.06.2-.13.22-.42.22-.42,0,0-.3-.06-.5.07-.04.03-.07.05-.1.08.01-.04.02-.08.03-.12.03-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.13-.02-.04-.04-.07-.07-.11-.15-.18-.46-.21-.46-.21,0,0-.06.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.24-.04-.47.15-.47.15,0,0,.17.24.41.28.05,0,.09.01.14.01-.04.02-.08.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.07.5-.07.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.04.23.17.44.17.44,0,0,.26-.15.29-.37,0-.04,0-.09,0-.13.02.04.04.07.07.11.15.19.45.21.45.21,0,0,.06-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m78.6,236.83s.08.02.13.03c.24.03.47-.15.47-.15,0,0-.17-.24-.41-.28-.05,0-.09,0-.14,0,.04-.02.08-.04.11-.07.2-.13.22-.41.22-.41,0,0-.3-.07-.5.07-.04.02-.07.05-.1.08.01-.04.02-.08.03-.12.04-.22-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.08,0,.13-.02-.04-.04-.07-.07-.11-.15-.19-.46-.21-.46-.21,0,0-.06.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.24-.04-.48.14-.48.14,0,0,.17.24.41.28.05,0,.09.01.14.01-.04.02-.07.04-.11.06-.2.13-.22.41-.22.41,0,0,.3.07.5-.06.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.04.23.17.44.17.44,0,0,.26-.15.29-.38,0-.04,0-.09,0-.13.02.03.04.07.07.11.15.19.46.21.46.21,0,0,.07-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m81.46,241.06s.09.02.13.03c.25.04.48-.14.48-.14,0,0-.17-.24-.41-.28-.05,0-.09-.01-.14-.01.04-.02.07-.04.11-.06.2-.13.22-.41.22-.41,0,0-.3-.07-.5.07-.04.02-.07.05-.1.08.01-.04.02-.08.03-.12.04-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.13-.02-.04-.04-.07-.07-.1-.15-.19-.46-.21-.46-.21,0,0-.07.28.08.46.03.04.06.07.09.1-.04-.01-.09-.02-.13-.03-.25-.04-.48.15-.48.15,0,0,.17.24.41.28.05,0,.09.01.14.01-.04.02-.07.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.07.5-.07.04-.02.07-.05.1-.08-.01.04-.02.08-.03.12-.03.23.17.44.17.44,0,0,.26-.15.29-.37,0-.04,0-.09,0-.13.02.04.04.07.07.11.15.19.45.21.45.21,0,0,.06-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m69.95,234.04s.09.02.13.03c.24.04.48-.15.48-.15,0,0-.17-.24-.41-.28-.05,0-.09-.01-.14,0,.04-.02.07-.04.11-.07.2-.13.22-.41.22-.41,0,0-.3-.07-.5.07-.04.03-.07.05-.1.08.01-.04.02-.08.03-.12.04-.23-.17-.44-.17-.44,0,0-.26.15-.29.37,0,.04,0,.09,0,.13-.02-.03-.05-.07-.07-.1-.15-.19-.46-.21-.46-.21,0,0-.07.28.08.46.03.04.06.07.09.1-.04-.01-.08-.02-.13-.03-.25-.04-.48.14-.48.14,0,0,.17.24.41.28.05,0,.09,0,.14,0-.04.02-.07.04-.11.06-.2.13-.22.42-.22.42,0,0,.3.06.5-.07.04-.03.07-.05.1-.08-.01.04-.02.08-.03.12-.03.23.17.44.17.44,0,0,.26-.15.29-.37,0-.04,0-.09,0-.13.02.04.04.07.07.11.15.18.46.21.46.21,0,0,.06-.28-.08-.46-.03-.04-.06-.07-.09-.1Z"/>
                      <path className="level-3-cls-16" d="m44.58,242.33c.06.02.13.04.2.04.39.06.75-.23.75-.23,0,0-.26-.38-.65-.44-.07-.01-.15-.02-.22-.02.06-.03.12-.06.18-.1.31-.21.34-.65.34-.65,0,0-.47-.11-.79.1-.06.04-.11.09-.16.13.02-.06.04-.12.05-.19.05-.36-.26-.7-.26-.7,0,0-.41.23-.46.59-.01.07-.02.14-.01.2-.03-.06-.07-.11-.11-.17-.23-.29-.72-.33-.72-.33,0,0-.1.43.13.73.04.06.09.11.14.15-.06-.02-.13-.04-.2-.05-.39-.06-.75.23-.75.23,0,0,.26.38.65.44.07.01.15.02.22.02-.06.03-.12.06-.18.1-.31.21-.34.66-.34.66,0,0,.47.1.79-.11.06-.04.11-.08.16-.13-.02.06-.04.12-.04.19-.06.35.26.7.26.7,0,0,.41-.23.46-.59.01-.07.01-.14.01-.2.03.05.07.11.11.16.23.29.72.33.72.33,0,0,.1-.43-.13-.73-.05-.06-.09-.11-.15-.15Z"/>
                      <path className="level-3-cls-16" d="m56.21,242.33c.06.02.13.04.2.04.38.06.75-.23.75-.23,0,0-.26-.38-.65-.44-.07-.01-.15-.02-.22-.02.06-.03.12-.06.17-.1.31-.21.34-.65.34-.65,0,0-.47-.11-.78.1-.06.04-.12.09-.16.13.02-.06.04-.12.05-.19.05-.36-.26-.7-.26-.7,0,0-.41.23-.46.59-.01.07-.02.14-.01.2-.03-.06-.07-.11-.11-.17-.23-.29-.72-.33-.72-.33,0,0-.1.43.13.73.04.06.09.11.14.15-.06-.02-.13-.04-.2-.05-.38-.06-.75.23-.75.23,0,0,.26.38.65.44.07.01.15.02.22.02-.06.03-.12.06-.18.1-.31.21-.34.66-.34.66,0,0,.47.1.78-.11.06-.04.11-.08.16-.13-.02.06-.04.12-.04.19-.06.35.26.7.26.7,0,0,.41-.23.46-.59,0-.07.01-.14.01-.2.03.05.07.11.11.16.23.29.72.33.72.33,0,0,.1-.43-.13-.73-.04-.06-.09-.11-.14-.15Z"/>
                      <path className="level-3-cls-16" d="m64.48,239.98c.06.02.13.04.2.05.39.06.75-.23.75-.23,0,0-.26-.38-.65-.44-.08-.01-.15-.02-.22-.02.06-.03.12-.06.17-.1.31-.21.34-.65.34-.65,0,0-.47-.1-.78.11-.06.04-.12.09-.16.13.02-.06.04-.12.05-.19.05-.36-.26-.7-.26-.7,0,0-.41.23-.46.59,0,.07-.01.14-.01.2-.03-.06-.07-.11-.11-.17-.24-.29-.72-.33-.72-.33,0,0-.1.43.13.73.04.06.09.11.14.15-.07-.02-.13-.04-.2-.05-.39-.06-.75.23-.75.23,0,0,.26.38.65.44.07.01.15.02.22.02-.06.03-.12.06-.18.1-.31.21-.34.65-.34.65,0,0,.47.1.78-.1.06-.04.11-.09.16-.13-.02.06-.04.12-.05.19-.06.36.26.7.26.7,0,0,.41-.23.46-.59.01-.07.01-.14.01-.2.03.06.07.11.11.17.23.29.72.33.72.33,0,0,.1-.44-.13-.73-.05-.06-.1-.11-.14-.15Z"/>
                    </g>
                  </g>
                  <polygon className="level-3-cls-16" points="538.94 506.93 352.61 299.32 -7.51 299.74 -8.14 506.93 538.94 506.93"/>
                  <rect className="level-3-cls-28" x="-.31" y="275.78" width="354.24" height="10.58"/>
                  <polygon className="level-3-cls-26" points="352.57 299.23 352.57 244.7 538.68 432.11 538.9 506.84 352.57 299.23"/>
                  <polygon className="level-3-cls-25" points="366.42 244.7 569.03 434.48 538.68 432.11 352.57 244.7 366.42 244.7"/>
                </g>
              </g>
              <g>
                <polygon className="level-3-cls-32" points="352.57 299.23 500.28 464.62 500 500.24 482.28 500.61 331.29 299.41 352.57 299.23"/>
                <polygon className="level-3-cls-32" points="360.13 308.22 .28 308.22 .39 298.46 352.57 299.23 360.13 308.22"/>
              </g>
            </g>
          </g>
          <g id="OBJECTS">
            <g>
              <g style={{ transform: `translateX(${Math.min(0, props.offsetY * 0.4 - (props.sectionRef.current?.offsetTop ? props.sectionRef.current.offsetTop -(props.sectionRef.current ? props.sectionRef.current?.getBoundingClientRect().height * 1.75: 0): 0)) }px)` }}>
                <path className="level-3-cls-32" d="m338.54,312.41c0,4.32-14.89,7.82-33.26,7.82s-33.25-3.5-33.25-7.82,14.89-7.82,33.25-7.82,33.26,3.5,33.26,7.82Z"/>
                <path className="level-3-cls-32" d="m305.07,304.81c-23.64,0-41.89,5.45-41.89,11.53s18.14,11.53,41.79,11.53,43.34-5.26,43.34-11.34-19.59-11.72-43.23-11.72Zm0,20.74c-21.93,0-39.7-4.35-39.7-9.73s17.77-8.8,39.7-8.8,39.7,3.43,39.7,8.8-17.77,9.73-39.7,9.73Z"/>
                <path className="level-3-cls-34" d="m305.78,304.27c-23.64,0-42.8,4.93-42.8,11.01s19.16,11.01,42.8,11.01,42.8-4.93,42.8-11.01-19.16-11.01-42.8-11.01Zm0,20.74c-21.93,0-39.7-4.35-39.7-9.73s17.77-9.73,39.7-9.73,39.7,4.36,39.7,9.73-17.77,9.73-39.7,9.73Z"/>
                <path className="level-3-cls-34" d="m305.78,304.82v-135.66c0-.67-.54-1.22-1.22-1.22s-1.21.54-1.21,1.22v135.66h2.43Z"/>
                <polygon className="level-3-cls-34" points="283.24 305.92 304.56 288.14 304.56 290.42 286.16 305.92 283.24 305.92"/>
                <polygon className="level-3-cls-34" points="326.29 305.92 304.96 288.14 304.96 290.42 323.37 305.92 326.29 305.92"/>
                <g>
                  <path className="level-3-cls-28" d="m334.18,267.39l-1.09-.34c1.37-4.31-1.9-32.47-4.4-44.32-5.32-25.18-23.45-44.91-23.63-45.11l.83-.78c.19.2,18.53,20.16,23.91,45.65,2.59,12.25,5.81,40.36,4.37,44.9Z"/>
                  <path className="level-3-cls-28" d="m318.38,271.62l-1.14-.03c0-.06.15-5.57.34-10.83.19-5.24-4.21-48.31-6.15-57.97-1.95-9.72-7.23-24.12-7.28-24.26l1.07-.39c.05.15,5.36,14.63,7.34,24.43,2,9.95,6.37,52.7,6.17,58.23-.19,5.25-.34,10.76-.34,10.82Z"/>
                  <path className="level-3-cls-28" d="m289.74,261.41c-2.16-4.15-3.27-22.25-2.8-35.05.97-26.04,15.65-48.82,15.8-49.05l.95.62c-.14.22-14.66,22.76-15.61,48.47-.46,12.41.63,30.56,2.67,34.49l-1.01.52Z"/>
                  <path className="level-3-cls-28" d="m306.03,270.21s-.57-2.85-1.65-8c-1.14-5.42-4.1-48.29-3.82-58.44.28-10,3.04-25.17,3.07-25.32l1.12.21c-.03.15-2.78,15.24-3.05,25.15-.27,9.85,2.72,53.04,3.79,58.17,1.08,5.15,1.64,7.98,1.65,8.01l-1.12.22Z"/>
                  <path className="level-3-cls-28" d="m286.35,196.66l-.14-1.13,8.26-1.04c8.23-1.03,33.36.81,34.42.89l-.08,1.14c-.26-.02-26.08-1.91-34.19-.9l-8.26,1.04Z"/>
                  <path className="level-3-cls-28" d="m279.88,208.79l-.1-1.14,11.42-1.04c11.33-1.03,47.13.88,47.48.89l-.06,1.14c-.36-.02-36.08-1.92-47.32-.9l-11.42,1.04Z"/>
                  <path className="level-3-cls-28" d="m276.12,220.62l-.09-1.13,13.51-1.04c13.39-1.03,55.74.87,56.16.89l-.05,1.14c-.42-.02-42.7-1.92-56.03-.89l-13.51,1.03Z"/>
                  <path className="level-3-cls-28" d="m276.12,235.34l-.08-1.14,14.02-1.04c13.89-1.03,57.82.88,58.26.89l-.05,1.14c-.44-.02-44.31-1.92-58.13-.89l-14.02,1.04Z"/>
                  <path className="level-3-cls-28" d="m345.65,252.42c-.37-.02-37.36-2.06-51.18-1.04l-14.02,1.04-.08-1.14,14.02-1.04c13.89-1.03,50.95,1.01,51.33,1.03l-.06,1.14Z"/>
                </g>
                <path className="level-3-cls-33" d="m346.63,240.16c2.23,22.63-15.59,40.14-39.08,40.14s-42.52-18.43-42.52-41.17,20.28-44.55,40.9-33.3c10.66,5.82-.53,33.83,6.26,31.58,19.17-6.36,33.82-3.7,34.45,2.74Z"/>
                <path className="level-3-cls-1" d="m313.04,274.03c-23.48,0-42.52-18.44-42.52-41.17,0-8.43,2.62-16.27,7.12-22.8-10.02,7.53-16.47,19.3-16.47,32.53,0,22.74,19.04,41.17,42.52,41.17,14.78,0,27.78-7.3,35.4-18.37-7.2,5.41-16.23,8.64-26.05,8.64Z"/>
                <g>
                  <path className="level-3-cls-34" d="m302.44,284.3c-16,0-28.63-7.89-34.32-16.45-9.05-13.63-10.02-33.03-2.53-50.63,10.59-24.89,34.99-39.26,35.24-39.4l.85,1.48c-.24.14-24.16,14.24-34.52,38.59-7.26,17.08-6.35,35.85,2.38,49.01,6.64,10,23.14,18.33,41.81,14.86,19.88-3.69,27.79-18.79,27.87-18.95l1.52.78c-.08.16-8.38,16.01-29.07,19.85-3.18.59-6.26.86-9.23.86Z"/>
                  <path className="level-3-cls-34" d="m306.15,277.58c-9.84,0-21.18-3.18-30.94-14.21-8.54-9.66-9.79-33.84-2.61-50.72,10.59-24.9,30.13-35.68,30.32-35.78l.8,1.51c-.19.1-19.22,10.62-29.56,34.95-7.61,17.9-5.06,40.58,2.31,48.91,10.31,11.65,23.59,15.89,39.48,12.6,11.94-2.47,20.95-8.5,21.04-8.56l.95,1.42c-.38.25-9.34,6.25-21.59,8.8-3.09.64-6.54,1.08-10.21,1.08Z"/>
                  <rect className="level-3-cls-34" x="275.55" y="202.91" width="1.71" height="8.47" transform="translate(40.44 459.39) rotate(-83.76)"/>
                  <rect className="level-3-cls-34" x="269.63" y="216.89" width="1.71" height="11.88" transform="translate(24.59 472.53) rotate(-84.92)"/>
                  <rect className="level-3-cls-34" x="261.48" y="237.42" width="15.34" height="1.71"/>
                  <path className="level-3-cls-34" d="m263.3,254.82c-.28,0-.5-.03-.65-.08l.59-1.6c-.06-.02-.1-.03-.1-.03.05,0,1.36.17,7.28-1.63,6.52-1.98,9.78-3.59,9.81-3.6l.76,1.53c-.14.07-3.41,1.69-10.08,3.71-3.68,1.12-6.32,1.71-7.61,1.71Z"/>
                  <path className="level-3-cls-34" d="m271.29,271.07l-.5-1.64c.05-.01,5.57-1.72,9.34-4.28,3.74-2.53,6.7-7.06,6.73-7.1l1.42.94c-.13.2-3.18,4.86-7.21,7.58-3.98,2.7-9.56,4.43-9.8,4.5Z"/>
                  <path className="level-3-cls-34" d="m288.12,281.6l-1.08-1.32c.05-.05,5.5-4.58,7.73-7.69,2.28-3.17,3.78-5.64,3.79-5.66l1.46.89s-1.55,2.55-3.87,5.77c-2.36,3.29-7.79,7.82-8.03,8.01Z"/>
                  <path className="level-3-cls-34" d="m310.87,283.76l-1.57-.67c.77-1.81,2.8-6.95,2.96-9l.22-2.64,1.7.14-.21,2.64c-.23,2.74-2.98,9.25-3.09,9.53Z"/>
                  <path className="level-3-cls-34" d="m324.27,278.7l-1.69-.21c.31-2.53.47-5.63.23-6.19.02.04.11.17.3.25l.65-1.59c.52.22,1.39.57.52,7.73Z"/>
                </g>
                <path className="level-3-cls-34" d="m317.81,273.88c-14.68,0-24.69-6.72-30.51-12.36-7.35-7.12-12.28-16.73-13.53-26.37-2.32-18,7.3-38.18,17.87-50.2,2.93-3.32,8.51-8.9,13.04-8.9,6.96,0,18.84,10.18,27.53,20.26,5.52,6.41,18.36,22.88,18.35,37.41-.01,18.52-8.6,40.16-32.74,40.16Zm-13.14-93.27c-1.09,0-4.5,1.54-9.61,7.36-9.89,11.25-18.91,30.02-16.77,46.61,2.21,17.08,17.59,34.75,39.52,34.75,26.8,0,28.18-29.66,28.18-35.6,0-9.02-6.44-21.89-17.24-34.43-10.08-11.69-20.16-18.68-24.08-18.68Z"/>
                <path className="level-3-cls-29" d="m336.08,253.74c0,5.14-10.31,9.31-23.04,9.31s-23.03-4.17-23.03-9.31,10.31-9.31,23.03-9.31,23.04,4.17,23.04,9.31Z"/>
                <g>
                  <path className="level-3-cls-40" d="m332.71,232.17c.01.11-.04.27-.23.51-.56.74-.87.67-1.22.68-.36,0-.31-.5-.68.3-.37.81-.87,1.67-1.81,2.77-.94,1.11-1.62,1.43-3.25,2.41-1.63.99-1.68,1.06-3.47,1.39-1.8.33-3.04.91-4.89-.55-1.85-1.46-2.21-3.73-1.99-4.84.23-1.11.61-1.71,1.63-1.46,1.03.25,2.94,1.75,4.46,2.13,1.52.38,3.56.45,4.98-.69,1.42-1.14,1.96-2.32,2.69-2.94.73-.63,1-.86,2.01-.76,1.01.09,1.41.32,1.61.51.21.19.15.33.17.54Z"/>
                  <g>
                    <path className="level-3-cls-40" d="m317.78,227.58s-2.2,1.91-3.29,2.44c-1.09.53-4.37,1.06-7.33,2.57-2.95,1.51-8.07,6.15-9.65,9.76-1.58,3.61-2.03,7.43-1.66,9.13.37,1.7-.69,1.92,1.78,4.02,2.47,2.1,8.22,3.04,10.91,2.24,2.68-.8,4.76-4.16,5.15-6.21.39-2.05-.08-3.66.84-4.72.93-1.06,5.46-2.74,6.6-3.78,1.14-1.04,2.96-2.76,3.04-5.88.08-3.12-1-3.32-.52-4.85.48-1.52.1-1.14.1-1.14l-5.97-3.59Z"/>
                    <path className="level-3-cls-40" d="m321.13,243.03l-4.34,2.56-2.26,1.22-5.89,1.08s.24-4.85,1.96-5.82c1.72-.97,4.41-.44,6.63-1.78,2.22-1.34,4.29-2.18,4.29-2.18l-.38,4.92Z"/>
                  </g>
                  <g>
                    <path className="level-3-cls-40" d="m316.92,242.52c.17,1.57.39,3.13.97,4.61.57,1.45.95,2.97,1.57,4.4.65,1.48,1.56,2.85,2.31,4.28.2.38.37.77.56,1.16,0,.03.02.05.02.08.13.59.26,1.16.61,1.67.43.6,1.3.52,1.64-.05.13.27.3.5.64.5.12,0,.27-.11.32-.21.03-.05.21-.57.31-.41.38.57,1.05.45.97-.28-.13-1.11-.99-1.99-1.68-2.78-.13-.15-.25-.29-.37-.44-.14-.25-.31-.48-.46-.72-.06-.11-.13-.22-.19-.32-.04-.07-.07-.14-.1-.21-.41-.91-.65-1.87-.97-2.8,0,0,0-.02,0-.03-.25-1.26-.49-2.48-.55-3.76,0-.12,0-.25-.01-.37,0-.75.04-1.5.09-2.2.2-2.68,1.37-7.03-.8-9.19-.28-.14-.57-.17-.92-.15-.54-.24-1.25,0-1.77.28-.93.52-1.69,1.41-2.07,2.41-.57,1.49-.28,3.01-.11,4.55Z"/>
                    <path className="level-3-cls-40" d="m322.26,253.22c.48-.08.95-.2,1.41-.34.11.31.22.61.35.91.03.07.07.14.1.21.06.11.13.21.19.32.15.24.31.47.46.72.12.15.24.3.37.44.7.79,1.56,1.67,1.68,2.78.08.73-.59.85-.97.28-.1-.15-.29.37-.31.41-.05.1-.2.21-.32.21-.34,0-.51-.24-.64-.5-.33.57-1.21.65-1.64.05-.35-.5-.48-1.08-.61-1.67,0-.03-.01-.05-.02-.08-.18-.39-.36-.78-.56-1.16-.43-.81-.9-1.61-1.36-2.42.61,0,1.23-.07,1.86-.18Z"/>
                  </g>
                  <g>
                    <path className="level-3-cls-32" d="m327.94,231.61s.6-.18,1.24.11c.64.29,1.09.53.84.66-.25.14-.51.27-1.06.18-.55-.09-1.87-.65-1.87-.65l.85-.3Z"/>
                    <g>
                      <path className="level-3-cls-40" d="m327.73,220.4c.12,0-1.13,4.38-1.13,4.38l-3.46-1.56s3.14-2.72,4.58-2.82Z"/>
                      <path className="level-3-cls-40" d="m329.21,231.2c-.01.15-.85,1.33-2.16,1.37-1.31.04-3.55.04-4.06-.11-.51-.15-6.18-3.92-6.18-3.92,0,0,.89-.47,1.45-2.09.57-1.62.84-2.95,2.02-3.83,1.18-.88,2.63-1.38,4.75-.56.85.33,1.57.65,2.13,1.02.85.55,1.29,1.46,1.43,2.38.23,1.53-.12,2.57.39,3.77.52,1.19.5,1.24.42,1.6-.08.36-.19.38-.19.38Z"/>
                      <g>
                        <path className="level-3-cls-40" d="m323.4,224.07s.02-.39-1.28-1.45c-1.3-1.06-1.55-1.08-2.18-1.53-.64-.45-1.49,0-1.48.78,0,.78.18,1.25.28,2.13.1.88.62,1.74.62,1.74,0,0,1.63-.37,2.3-.68.68-.3,1.73-.99,1.73-.99Z"/>
                        <path className="level-3-cls-32" d="m322.8,224.13s.02-.31-1.02-1.16c-1.04-.85-1.24-.86-1.75-1.22-.51-.36-1.19,0-1.18.62,0,.63.14,1,.22,1.7.08.7.5,1.39.5,1.39,0,0,1.3-.3,1.84-.54.54-.24,1.38-.79,1.38-.79Z"/>
                      </g>
                      <path className="level-3-cls-40" d="m327.16,227.22s-.34-.18-1.42-.82c-1.08-.65-1.77-.36-2.36.18-.6.53-1.05,1.24-.94,1.75.11.52-.06,1.09,1.25.93,1.56-.19,1.56-.11,3.98.27l-.5-2.31Z"/>
                      <g>
                        <path className="level-3-cls-40" d="m328.78,230.09s-.76-.8-1.84-.51c-1.08.29-2.11,1.59-2.11,1.59,0,0-3.13-.05-2.44.78.69.83,1.21.8,1.21.8,0,0,1.78-.04,3.36.02.79.03,2-.71,2.16-1.37.16-.66-.34-1.3-.34-1.3Z"/>
                        <path className="level-3-cls-40" d="m328.81,230.84s-1-1.03-1.37-1.61c-.36-.58-.66-1.73-.61-2.19.04-.46.96-1.44,1.41-1.58.46-.14.43,1.01.44,1.3.01.29.47,2.59.63,2.95.16.36.33.79.34.86,0,.07-.85.27-.85.27Z"/>
                        <path className="level-3-cls-16" d="m329.09,231.47s-.26.07-.33-.35c-.08-.42-.33-.71-.03-.81.3-.1.62-.25.79-.12.17.13.21.48.12.67-.09.19-.55.61-.55.61Z"/>
                      </g>
                      <path className="level-3-cls-16" d="m323.99,227.86c.23.01.47.12.71.14.45.04.74-.23,1.15-.35.04-.01.06.04.03.06-.37.25-.79.48-1.25.47-.16,0-.72.01-.72-.23,0-.04.04-.09.08-.08Z"/>
                    </g>
                  </g>
                  <path className="level-3-cls-40" d="m315.18,245.85c.81,1.32.94,2.39.18,4.32-.76,1.93-.76,1.64-1.85,2.96-1.09,1.32-1.16,1.6-1.67,2.15-.51.55.06.86,1.02,1.06.96.21,2.02.39,3.01.64,1,.25,1.99.06,2.41.57.31.37,0,1.68-.33,1.89-.33.2-4.94.1-5.99,0-1.98-.18-3.41-.39-4.33-.63-.93-.23-3.6-.79-4.22-.81-.62-.02-3.28-.26-4.19-.81-1.41-.85-2.05-1.98-1.94-2.41.12-.42,1.07-3.97,3.02-6.49,1.95-2.52,2.79-3.55,5.09-4.39,2.31-.85,4.93-.37,5.63-.31.7.06,3.34.93,4.15,2.25Z"/>
                  <path className="level-3-cls-16" d="m313.29,258.4s.55.48.1,1.13c-.46.64-6.67.98-8.79.59s-5.09-1.21-6.59-1.93c-1.5-.72-2.02-.61-2.29-1.97-.27-1.36.29-2.55.25-2.77-.04-.22,1.69.4,1.69.4,0,0,.8,1.09,1.52,1.74.72.65,3.51,1.57,5.41,1.74,1.89.17,5.87.73,6.65.72.78,0,2.04.34,2.04.34Z"/>
                </g>
              </g>
              <g style={{ transform: `translateX(${Math.min(0, props.offsetY * 0.4 - (props.sectionRef.current?.offsetTop ? props.sectionRef.current.offsetTop -(props.sectionRef.current ? props.sectionRef.current?.getBoundingClientRect().height * 1.75: 0): 0)) }px)` }}>
                <path className="level-3-cls-32" d="m241,441.51l30.76-11.7-33.65-11.89-36.16,11.39c-13.56-2.1-29.37-3.31-46.25-3.31s-33.7,1.28-47.54,3.51l-36.88-7.93-32.67,12,28.87,10.32c-1.9,1.93-2.92,3.95-2.92,6.03,0,13.22,40.8,23.94,91.13,23.94s91.13-10.72,91.13-23.94c0-2.97-2.06-5.81-5.83-8.44Z"/>
                <g>
                  <g>
                    <g>
                      <path className="level-3-cls-34" d="m40.97,433.13c-.39,1.04-1.55,1.57-2.59,1.18h0c-1.04-.39-1.57-1.55-1.18-2.59l18.54-49.73c.39-1.04,1.55-1.57,2.59-1.18h0c1.04.39,1.57,1.54,1.18,2.59l-18.54,49.73Z"/>
                      <path className="level-3-cls-34" d="m73.25,421.82c-.35.93-1.39,1.41-2.32,1.06h0c-.94-.35-1.41-1.39-1.06-2.32l16.66-44.69c.35-.94,1.39-1.41,2.33-1.06h0c.93.35,1.41,1.39,1.06,2.32l-16.66,44.69Z"/>
                      <path className="level-3-cls-34" d="m73.58,442.66c.42,1.2-.21,2.51-1.41,2.94h0c-1.2.42-2.51-.21-2.94-1.41l-36.68-104.45c-.42-1.2.21-2.51,1.41-2.94h0c1.2-.42,2.51.21,2.94,1.41l36.68,104.46Z"/>
                      <path className="level-3-cls-34" d="m110.92,427.99c.4,1.13-.2,2.38-1.33,2.77h0c-1.13.4-2.37-.2-2.77-1.33l-34.64-98.66c-.4-1.13.2-2.38,1.33-2.77h0c1.13-.4,2.37.2,2.77,1.33l34.64,98.66Z"/>
                      <polygon className="level-3-cls-26" points="48.36 379.38 77.31 397.02 116.6 386.38 87.97 373.8 48.36 379.38"/>
                      <polygon className="level-3-cls-4" points="38.93 357.88 84.18 353.86 78.48 337.61 32.96 340.89 38.93 357.88"/>
                      <line className="level-3-cls-20" x1="37.72" y1="340.55" x2="43.29" y2="356.95"/>
                      <line className="level-3-cls-20" x1="74.19" y1="338.76" x2="79.15" y2="353.23"/>
                      <polygon className="level-3-cls-28" points="77.27 400.71 77.31 397.02 48.36 379.38 48.99 382.81 77.27 400.71"/>
                      <polygon className="level-3-cls-28" points="116.6 386.38 116.6 389.13 77.27 400.71 77.31 397.02 116.6 386.38"/>
                    </g>
                    <path className="level-3-cls-1" d="m215.11,347.63l6.96,1.35c4.82-5.75,5.68-19.47,5.68-19.47l-8.49,1.01s-2.04,12.87-4.14,17.11Z"/>
                    <path className="level-3-cls-42" d="m88.8,349.27l-6.96,1.35c-4.82-5.75-5.42-17.29-5.42-17.29l7.16-3.01s3.11,14.71,5.22,18.95Z"/>
                    <g>
                      <path className="level-3-cls-34" d="m269.17,428.63c.39,1.04,1.54,1.57,2.59,1.18h0c1.04-.39,1.57-1.55,1.18-2.59l-18.54-49.73c-.39-1.04-1.55-1.57-2.59-1.18h0c-1.04.39-1.57,1.55-1.18,2.59l18.54,49.73Z"/>
                      <path className="level-3-cls-34" d="m235.93,417.71c.35.94,1.39,1.41,2.33,1.06h0c.93-.35,1.41-1.39,1.06-2.33l-16.66-44.69c-.35-.94-1.39-1.41-2.33-1.06h0c-.93.35-1.41,1.39-1.06,2.32l16.66,44.69Z"/>
                      <path className="level-3-cls-34" d="m236.93,439.02c-.42,1.2.21,2.52,1.41,2.94h0c1.2.42,2.51-.21,2.93-1.41l36.68-104.45c.42-1.2-.21-2.51-1.41-2.94h0c-1.2-.42-2.52.21-2.94,1.41l-36.68,104.45Z"/>
                      <path className="level-3-cls-34" d="m199.23,427.72c-.4,1.13.2,2.37,1.33,2.77h0c1.13.4,2.38-.2,2.77-1.33l34.64-98.66c.4-1.13-.2-2.38-1.33-2.77h0c-1.13-.4-2.37.2-2.77,1.33l-34.64,98.66Z"/>
                      <polygon className="level-3-cls-26" points="262.15 375.75 233.2 393.38 193.91 382.74 222.54 370.16 262.15 375.75"/>
                      <polygon className="level-3-cls-26" points="271.58 354.24 226.33 350.22 232.03 333.97 277.55 337.26 271.58 354.24"/>
                      <line className="level-3-cls-20" x1="272.79" y1="336.91" x2="267.22" y2="353.31"/>
                      <line className="level-3-cls-20" x1="236.32" y1="335.12" x2="231.36" y2="349.59"/>
                      <polygon className="level-3-cls-28" points="233.24 397.07 233.2 393.38 262.15 375.75 261.52 379.17 233.24 397.07"/>
                      <polygon className="level-3-cls-28" points="193.91 382.74 193.91 385.49 233.24 397.07 233.2 393.38 193.91 382.74"/>
                    </g>
                    <g>
                      <g>
                        <g>
                          <path className="level-3-cls-1" d="m250.77,352.83s-28.65-1.54-48.98,3.57c-18.76,4.71-19.33,8.78-22.44,20.63-2.11,8.06-5.75,28.66-7.95,40.46-.41,2.22-5.63,6.49-5.63,6.49l-2.41,2.05s6.24-.3,9.57-1.38c3.32-1.09,2.04-1.2,2.58-3.72.33-1.54.4-1.98.45-2.07,6.24-11.46,9.25-14.72,11.86-21.69,2.39-6.39,4.14-20.69,4.14-20.69,0,0,31.9,6.96,40.31,6.52,3.11-.16,18.75-4.97,19.48-13.8.5-6.04-.99-16.37-.99-16.37Zm-74.8,66.04h0s0,0,0,0Z"/>
                          <path className="level-3-cls-2" d="m250.77,352.83s-28.65-1.54-48.98,3.57c-18.76,4.71-19.33,8.78-22.44,20.63-2.11,8.06-5.75,28.66-7.95,40.46-.41,2.22-5.63,6.49-5.63,6.49l-2.41,2.05s6.24-.3,9.57-1.38c3.32-1.09,2.04-1.2,2.58-3.72.33-1.54.4-1.98.45-2.07,6.24-11.46,9.25-14.72,11.86-21.69,2.39-6.39,4.14-20.69,4.14-20.69,0,0,31.9,6.96,40.31,6.52,3.11-.16,18.75-4.97,19.48-13.8.5-6.04-.99-16.37-.99-16.37Zm-74.8,66.04h0s0,0,0,0Z"/>
                          <path className="level-3-cls-33" d="m175.49,422.34c-.01-.27-.03-.75-.03-.75,0,0-3.53,1.93-4.92,2.45-7.14,2.67-4.53-.12-4.75-.07-2,.49-4.19,2.08-6.39,3.76-.74.56,2.83,1.22,3.01,1.24,3.19.3,4.24-.24,5.29-.47,1.87-.41,2.51-1.33,4.2-2.17.33.77.47,1.38.69,2.18.05.17,1.36-.05,1.36-.05,0,0,1.6-4.69,1.54-6.12Z"/>
                        </g>
                        <g>
                          <path className="level-3-cls-1" d="m254.89,357.51s-25.11.76-46.57,5.29c-8.83,1.87-14.3,2.75-17.71,5.07-4.94,3.36-4.5,8.82-6.56,15.62-2.52,8.34-7.14,29.74-9.9,41.99-.52,2.3-6.14,6.57-6.14,6.57l-2.6,2.06s6.54-.07,10.06-1.07c3.52-1.01,2.18-1.18,2.85-3.79.41-1.6.5-2.05.55-2.15,6.97-11.73,10.1-14.98,13.11-22.17,2.75-6.59,5.29-21.51,5.29-21.51,0,0,35.16-.7,43.97-.83,3.26-.04,13.66-25.09,13.66-25.09Z"/>
                          <path className="level-3-cls-33" d="m178.22,430.72v-.78s-3.76,1.88-5.24,2.37c-7.57,2.51-3.59-1.22-3.82-1.17-2.11.42-7.14,3.16-8.1,4.66-.53.82,2.58.9,2.78.92,3.32.44,5.71.69,6.83.49,1.97-.35,1.86-1.65,3.65-2.46.31.81.32,1.55.52,2.4.04.19,1.53-.08,1.53-.08,0,0,1.85-4.84,1.85-6.34Z"/>
                        </g>
                      </g>
                      <path className="level-3-cls-31" d="m257.59,366.88c-.16-6.75-5.19-19.93-5.19-19.93,0,0-17.63,6.49-27.54,6.57-11.31.09-19.34,1.16-25,2.49-2.37.15-4.74.45-7.03.97-5.75,1.3-11.17,10.45-11.17,10.45-2.36,3.21-.14,3.77,3.46,3.91,3.6.14,5.15,1.49,6.66,2.75,1.51,1.26,3.15,1.02,3.36,4.41.21,3.38.36,6.58,1.76,6.91,1.4.33,2.21.86,2.21.86,0,0,1.55,1.97,1.25,5.27s.69,5.93,2.79,6.9c2.1.96,4.95-.29,6.11.65,1.17.94,3.05,4.7,5.88,5.1,2.83.4,5.17-1.69,7.22-1.67,2.05.02,5.1,2.11,6.72-1.81,1.62-3.92,2.88-7.17,7.61-10.81,2.07-1.59,4.79-3.12,7.19-4.35,1.94-.64,3.86-1.49,5.64-2.62h0s0,0,0,0c4.66-2.96,8.25-7.86,8.06-16.05Z"/>
                      <g>
                        <path className="level-3-cls-40" d="m221.41,314.44c-2.17,3.09-6.76,17.03-.53,20.67,8.21,4.79,2.65,17.38,3.98,18.41,5.22,4.02,9.54,6.51,23.93,3.98.97-.17,7.69-1.16,7.69-1.16,0,0-4.29-12.79-4.61-19.19-.89-17.81-1.33-21.57-5.92-26.19-3-3.02-10.55-6.28-14.9-4.84-3.02,1.01-6.48,3.79-9.65,8.31Z"/>
                        <path className="level-3-cls-30" d="m246.6,345.1c-12.07,0-24.77-11.46-24.77-26.25,0-3.22,1.96-7.07,4.23-9.7-1.56,1.36-3.14,3.11-4.65,5.26-2.17,3.09-6.76,17.03-.53,20.67,8.21,4.79,2.65,17.38,3.98,18.41,5.22,4.02,9.54,6.51,23.93,3.98.97-.17,7.69-1.16,7.69-1.16,0,0-2.13-6.37-3.5-12.37-2.02.75-4.16,1.16-6.37,1.16Z"/>
                      </g>
                      <g>
                        <path className="level-3-cls-1" d="m237.6,303.83c-.38-3.08-1.41-17.05-1.57-17.76,0,0-.83-6.74-7.84-5.72-4.21.61-8.94-1.08-7.7,10.33.71,6.49,3.23,7.45,7.37,7,.3-.03.61,0,.92-.03.12,2.7,1.86,7.54.41,9.3-2.54,3.08-2.89,2.97-3.64,4.13-.58.9-1.36,2.96-.01,4.27,1.59,1.55,3.57,1.73,7.76-.42,1.66-.85,7.61-7.39,7.61-7.39,0,0-2.94-.62-3.31-3.71Z"/>
                        <g>
                          <path className="level-3-cls-33" d="m221.4,282.16c4.42-2.48,9.64,1.23,9.43,5.31-.23,4.36.41,6.49,2.83,7.6,1.89.87,5.22,1.33,5.22,1.33,1.34-.53,2.53-1.1,3.28-1.87,1.49-.79,2.71-2.1,3.24-4.21.45-1.8.34-3.51-.44-4.85-1.49-2.57-1.98-5.33-3.95-7.6-1.82-2.11-3.99-3.82-6.6-4.83-2.5-.97-4.93-.48-7.37.35-2.6.89-5.47.46-7.62,2.36-3.48,3.08-2.51,7.93,1.12,8.83,0,0,.3-2.1.86-2.42Z"/>
                          <path className="level-3-cls-33" d="m241.92,302.55c.34-1.54-.07-3.05-.16-4.58-.03-.55.15-2.05-.55-2.36-.98-.43-3.41-.12-4.34.57-.06,0-.12.01-.14.08,0,.02,0,.03-.01.05-.09.11-.12.23-.1.34-.4,1.38-.64,2.71-1.47,3.96-.87,1.31-2.09,2.47-3.11,3.66-1.79,2.07-3.48,4.18-4.39,6.79-1.24,3.54-.19,8.66,3.26,10.6.33.19.57-.23.5-.5-1.22-4.58.47-9.61,4.5-12.18,2.86-1.83,5.24-2.86,6.03-6.44Z"/>
                          <path className="level-3-cls-37" d="m241.8,294.63c-.62-.98-1.52-1.05-2.61-1.02-1,.03-1.74.23-2.26.68-.17.11-.33.24-.47.44-.42.59-.58,1.37-.39,2.06.18.64.94.5,1.42.42,1.49-.24,2.6-.15,4.06.3.23.07.47-.05.51-.3.12-.8.18-1.86-.26-2.58Z"/>
                        </g>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path className="level-3-cls-42" d="m142.54,436.36c-1.55-.38-4.67-.62-7.46-3.86-.6-.69-1.07-1.99-1.45-3.49-.14-.64-.27-1.43-.37-2.33l-7.94-.77c.62,1.73,1.13,3.34,1.48,4.76.69,2.81-.25,4.77.91,6.34.89,1.2,1.4.97,3.84,1.03,1.85.05,3.57.68,6.04,1.45,2.48.76,4.34.6,5.64-.57,1.3-1.17.87-2.16-.69-2.54Z"/>
                        <path className="level-3-cls-33" d="m68.68,360.69s3.13,10.74,4.81,14.77c1.68,4.02,4.66,7.26,9.37,8.87,4.72,1.61,19.27,4.54,29.76,8.08,2.04.69,4.14,2.32,4.49,10.31.16,3.73,2.8,14.16,5.42,20.27,2.62,6.12,4.02,7.82,4.02,7.82l8.1-.94s-2.16-21.25-3.21-32.11c-.75-7.75-.86-16.5-7.51-20.9-4.03-2.66-10.69-5.41-20.42-7.51-14.51-3.15-22.66-11.54-22.66-11.54l-12.18,2.89Z"/>
                        <path className="level-3-cls-39" d="m128.12,381.46c-4.97,2.55-10.69,4.01-16.78,4.01-17.21,0-31.48-11.6-34.17-26.79l-8.5,2.02s3.13,10.74,4.81,14.77c1.68,4.02,4.66,7.26,9.37,8.87,4.72,1.61,19.27,4.54,29.76,8.08,2.04.69,4.14,2.32,4.49,10.31.16,3.73,2.8,14.16,5.42,20.27,2.62,6.12,4.02,7.82,4.02,7.82l8.1-.94s-2.16-21.25-3.21-32.11c-.54-5.58-.76-11.67-3.32-16.29Z"/>
                      </g>
                      <g>
                        <path className="level-3-cls-42" d="m121.5,456.34c-1.74-.18-5.14.01-8.64-3.08-.75-.66-1.45-2-2.08-3.56-.25-.67-.5-1.5-.74-2.47l-8.7.33c.92,1.78,1.72,3.44,2.3,4.93,1.16,2.93.44,5.2,1.91,6.72,1.14,1.17,1.65.84,4.3.55,2.01-.22,3.95.22,6.74.68,2.79.46,4.78.01,6.02-1.45,1.23-1.45.62-2.46-1.11-2.64Z"/>
                        <path className="level-3-cls-33" d="m111.16,443.58c-.97-4.51-3.87-17.41-4.67-23-.81-5.59-1.27-10.05-1.27-10.05-.69-6.25-2.16-10.35-4.31-14.28-2.44-4.46-7.62-11.7-12.35-17.93-4.73-6.23-7.56-10.79-8.21-12.58-.65-1.79-2.49-6.66-2.49-6.66l-25.49,4.94s-1.8,9.78,2.07,16.38c3.32,5.67,8,9.19,19.36,14.94,10.9,5.52,13.8,9.56,15.07,14.66.85,3.39.54,8.6,1.34,13.91.81,5.32,1.35,7.42,4.35,13.2,3.87,7.43,7.3,15.12,7.3,15.12,0,0,9.06-.15,9.86-1.6.81-1.45.4-2.55-.56-7.06Z"/>
                      </g>
                      <path className="level-3-cls-1" d="m52.49,362.1s3.25.13,10.34-.75c4.12-.51,11.05-2.39,13.83-3.55,2.79-1.15,4.04-2.14,4.04-2.14l2.23,3.41s-8.02,6.04-21.4,7.5c-6.62.72-9.51.37-9.51.37"/>
                    </g>
                    <g>
                      <path className="level-3-cls-42" d="m50.58,314c-.34-3.31-3.2-18.79-3.2-19.57,0,0-.74-7.24,6.83-7.84,4.54-.37,9.08-3.25,10.5,8.96.8,6.95-1.61,8.56-6.03,9.07-.33.04-.64.15-.97.19.51,2.85.05,7.89,1.98,9.38,3.38,2.61,10.61,2.44,10.61,2.44,0,0-2.02,3.9-5,5.9-2.99,2-5.67,2.59-10.72,2.58-3.99-.02-9.13-5.71-9.13-5.71,0,0,5.47-2.08,5.12-5.39Z"/>
                      <g>
                        <path className="level-3-cls-37" d="m84.06,330.68s-4.21-11.31-10.66-13.82l-1.25-.45c-2.03-.68-10.68-1.58-10.68-1.58,0,0,1.86,3.68-3.28,5.22-6.2,1.85-8.86-3.88-8.86-3.88,0,0-4.92,2.89-8.89,5.55-4.04,2.7-6.68,6.84-6.97,12.69-.21,4.08.98,10.85.98,10.85l10-2.6c2.77,11.07,5.04,23.57,5.04,23.57l34.17-9.81-7.24-23.09,7.64-2.64Z"/>
                        <path className="level-3-cls-31" d="m66.32,345.35c-13.11,0-23.75-11.16-23.8-24.94-.7.45-1.4.91-2.07,1.35-4.04,2.7-6.68,6.84-6.97,12.69-.21,4.08.98,10.85.98,10.85l10-2.59c2.77,11.07,5.04,23.53,5.04,23.53l34.17-9.81-4.76-15.17c-3.61,2.32-8.04,4.09-12.58,4.09Z"/>
                      </g>
                      <path className="level-3-cls-40" d="m57.33,280.47c-5.4-2.57-14.33,1.83-16.47,4.46-.88,1.17-1.56,2.68-1.82,4.07-.32,1.74-.31,1.73-.37,3.56-.17,5.46-3.21,6.28-5.75,8.44-11.1,9.48-4.77,20.4,4.36,21.05,8.73.63,11.52-1.61,15.43-7.06,2.26-3.16,2.79-9.61-.2-14.05-6.4-9.54,5.02-8.3,9.4-10.8,4.94-2.81-.38-7.69-4.57-9.68Z"/>
                    </g>
                    <g>
                      <path className="level-3-cls-34" d="m191.79,449.95c0,5.38-16.61,9.75-37.1,9.75s-37.1-4.36-37.1-9.75,16.61-9.74,37.1-9.74,37.1,4.36,37.1,9.74Z"/>
                      <path className="level-3-cls-28" d="m145.8,353.91v95.65c0,.86,3.98,1.57,8.89,1.57s8.89-.7,8.89-1.57v-95.65h-17.78Z"/>
                      <g>
                        <path className="level-3-cls-34" d="m243.17,365.51c0,12.84-39.61,23.24-88.48,23.24s-88.48-10.4-88.48-23.24,39.61-23.24,88.48-23.24,88.48,10.41,88.48,23.24Z"/>
                        <path className="level-3-cls-25" d="m243.17,361.23c0,12.84-39.61,23.24-88.48,23.24s-88.48-10.41-88.48-23.24,39.61-23.24,88.48-23.24,88.48,10.4,88.48,23.24Z"/>
                      </g>
                    </g>
                    <g>
                      <path className="level-3-cls-15" d="m79.45,341.19h11.67l-2.21,15.54s0,0,0,.01c0,.4-1.62.73-3.62.73s-3.57-.31-3.62-.71h0l-2.21-15.58Z"/>
                      <path className="level-3-cls-13" d="m79.45,341.23c0,.42,2.61.77,5.83.77s5.83-.35,5.83-.77-2.61-.77-5.83-.77-5.83.34-5.83.77Z"/>
                      <path className="level-3-cls-14" d="m80.05,341.45c0,.3,2.34.54,5.24.54s5.24-.24,5.24-.54-2.34-.54-5.24-.54-5.24.24-5.24.54Z"/>
                      <g>
                        <polygon className="level-3-cls-7" points="84.78 343.51 85.79 343.51 90.04 343.51 88.23 356.2 85.79 356.2 84.78 356.2 82.34 356.2 80.53 343.51 84.78 343.51"/>
                        <path className="level-3-cls-8" d="m82.05,343.51c-.03.38-.04.76-.04,1.15,0,5.2,2.68,9.58,6.32,10.86l-.1.68h-5.89l-1.81-12.69h1.52Z"/>
                        <path className="level-3-cls-8" d="m84.25,343.51c.57,3.3,2.27,6.15,4.63,7.99l1.14-7.99h-5.77Z"/>
                      </g>
                      <g>
                        <path className="level-3-cls-9" d="m85.33,341.96l-4.28-8.08-1.26.42,4,7.66s.62-.01.9,0c.37,0,.64,0,.64,0Z"/>
                        <polygon className="level-3-cls-33" points="81.48 334.69 79.91 334.52 80.23 335.14 81.79 335.27 81.48 334.69"/>
                        <polygon className="level-3-cls-33" points="82.2 336.03 80.62 335.89 80.92 336.47 82.51 336.61 82.2 336.03"/>
                        <polygon className="level-3-cls-33" points="82.85 337.27 81.27 337.13 81.56 337.74 83.16 337.85 82.85 337.27"/>
                        <polygon className="level-3-cls-33" points="83.47 338.45 81.89 338.3 82.18 338.91 83.78 339.03 83.47 338.45"/>
                        <polygon className="level-3-cls-33" points="84.15 339.72 82.54 339.55 82.86 340.18 84.45 340.29 84.15 339.72"/>
                        <polygon className="level-3-cls-33" points="84.74 340.88 83.16 340.73 83.45 341.33 85.05 341.45 84.74 340.88"/>
                      </g>
                    </g>
                    <g>
                      <path className="level-3-cls-6" d="m214.08,341.16h-11.66l2.21,15.54s0,.01,0,.01c0,.4,1.62.73,3.62.73s3.57-.31,3.62-.71h0l2.21-15.58Z"/>
                      <path className="level-3-cls-14" d="m214.08,341.2c0,.42-2.61.77-5.83.77s-5.83-.35-5.83-.77,2.61-.77,5.83-.77,5.83.34,5.83.77Z"/>
                      <path className="level-3-cls-13" d="m213.49,341.42c0,.3-2.35.54-5.24.54s-5.24-.24-5.24-.54,2.34-.54,5.24-.54,5.24.24,5.24.54Z"/>
                      <g>
                        <polygon className="level-3-cls-12" points="208.76 343.48 207.74 343.48 203.5 343.48 205.3 356.17 207.74 356.17 208.76 356.17 211.19 356.17 213 343.48 208.76 343.48"/>
                        <path className="level-3-cls-8" d="m211.48,343.48c.03.38.04.76.04,1.15,0,5.2-2.68,9.58-6.32,10.86l.1.68h5.89l1.81-12.69h-1.52Z"/>
                        <path className="level-3-cls-8" d="m209.28,343.48c-.57,3.3-2.27,6.14-4.63,7.99l-1.14-7.99h5.77Z"/>
                      </g>
                      <g>
                        <path className="level-3-cls-9" d="m208.2,341.93l4.29-8.09,1.25.42-3.99,7.66s-.62-.01-.9,0c-.37,0-.64,0-.64,0Z"/>
                        <polygon className="level-3-cls-33" points="212.05 334.66 213.62 334.49 213.3 335.11 211.75 335.24 212.05 334.66"/>
                        <polygon className="level-3-cls-33" points="211.33 336 212.91 335.86 212.61 336.45 211.02 336.58 211.33 336"/>
                        <polygon className="level-3-cls-33" points="210.68 337.25 212.26 337.1 211.97 337.71 210.37 337.83 210.68 337.25"/>
                        <polygon className="level-3-cls-33" points="210.06 338.42 211.64 338.27 211.35 338.88 209.75 339 210.06 338.42"/>
                        <polygon className="level-3-cls-33" points="209.39 339.69 211 339.53 210.68 340.15 209.08 340.27 209.39 339.69"/>
                        <polygon className="level-3-cls-33" points="208.79 340.85 210.37 340.7 210.08 341.31 208.48 341.42 208.79 340.85"/>
                      </g>
                    </g>
                    <g>
                      <path className="level-3-cls-42" d="m36.64,344.74s4.3,11.65,6.79,16.1c1.64,2.93,3.32,5.11,6.2,5.36,2.88.25,7.22.05,15.25-3.85,8.03-3.9,14.27-7.39,14.27-7.39l-2.34-3.15s-10.44,2.37-15.73,4.13c-5.29,1.76-8.91,1.92-8.91,1.92l-6.69-15.88-8.84,2.77Z"/>
                      <path className="level-3-cls-42" d="m75.36,352.51s.02-.01.02-.02c1.53-1.06,2.33-2.01,3.61-3.62.63-.8,1.07-1.29,2.03-2.25.75-.75.93-.72,1.2-.46.28.26.16.73-.28,1.14-.43.41-.75.96-.84,1.37-.18.8,1.55.21,2.21-.18,1.21-.71,2.64-1.98,3.23-2.1.58-.12.7.55.39.81-.34.28-1.6,1.27-2.26,1.87-.2.19-.96.82-.96.82,0,0,2.64-1.14,4.35-2.22.41-.26.95.57.44.94-.6.43-4.22,2.45-4.22,2.45,0,0,3.52-1.32,3.87-1.16.35.17.51.72-.52,1.08-.63.23-1.79.69-3.3,1.1-.27.07-.21.35-.21.35,0,0,3.03-.92,3.16-.45.12.45-.3.52-2.01,1.13-1.96.69-2.33.69-4.22,1.39-1.52.56-2.84,1.12-5.11,2.18l-.6-4.19Z"/>
                    </g>
                    <g>
                      <path className="level-3-cls-1" d="m214.27,352.68c.24-.48-2.73-1.84-5.88-2.89-.71-.24-2.53-.86-2.97-.26-.38.52,1.79,2.03,1.79,2.03,0,0-1.97,1.31-4.22-.36-1.56-1.16-.63,4.16,1.15,5.31,4.31,2.78,10.17.08,10.17.08l-.03-3.91Z"/>
                      <path className="level-3-cls-1" d="m246.54,314.82c-2.08-2.41-7.83-2.92-10.11.11-4.1,5.42-.77,10.22,1.1,17.25.79,2.99,1.45,7.85,1.86,11.32.22,1.81-.31,4.84-4.72,5.34-7.54.87-20.66,3.43-20.66,3.43l-2.22,5.04c3-1.87,14.16,1.01,25.28-.17,4.5-.48,8.38-1.74,10.33-3.7,3.09-3.11,2.57-5.86,2.83-10.42.45-7.89.25-14.31-.02-18.05-.39-5.43-2.29-8.55-3.67-10.15Z"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path className="level-3-cls-26" d="m137.09,360.38c0,2.85-9.91,5.17-22.14,5.17s-22.14-2.32-22.14-5.17,9.91-5.17,22.14-5.17,22.14,2.32,22.14,5.17Z"/>
                      <path className="level-3-cls-34" d="m137.09,359.45c0,2.86-9.91,5.17-22.14,5.17s-22.14-2.31-22.14-5.17,9.91-5.17,22.14-5.17,22.14,2.31,22.14,5.17Z"/>
                      <path className="level-3-cls-4" d="m129.19,358.95c0,1.84-6.37,3.33-14.24,3.33s-14.23-1.49-14.23-3.33,6.37-3.32,14.23-3.32,14.24,1.49,14.24,3.32Z"/>
                    </g>
                    <g>
                      <g>
                        <path className="level-3-cls-33" d="m110.43,354.47c0,3.73-3.03,6.76-6.76,6.76s-6.76-3.03-6.76-6.76,3.03-6.77,6.76-6.77,6.76,3.03,6.76,6.77Z"/>
                        <path className="level-3-cls-39" d="m108.42,349.61c-.2,3.56-3.14,6.39-6.74,6.39-1.85,0-3.53-.75-4.75-1.95,0,.12-.02.25-.02.38,0,3.74,3.03,6.76,6.76,6.76s6.76-3.03,6.76-6.76c0-1.88-.77-3.58-2.01-4.81Z"/>
                        <path className="level-3-cls-28" d="m104.44,349.69c0,.34-.42.62-.94.62s-.94-.28-.94-.62.42-.62.94-.62.94.28.94.62Z"/>
                      </g>
                      <g>
                        <path className="level-3-cls-33" d="m120.5,352.74c2.01,3.15,1.08,7.33-2.07,9.34-3.15,2.01-7.33,1.08-9.34-2.07-2.01-3.15-1.08-7.33,2.07-9.34,3.15-2.01,7.33-1.08,9.34,2.07Z"/>
                        <path className="level-3-cls-39" d="m116.19,349.72c1.75,3.11.79,7.07-2.26,9.01-1.56,1-3.38,1.27-5.06.91.06.11.12.22.19.33,2.01,3.15,6.19,4.08,9.34,2.07,3.15-2.01,4.08-6.19,2.07-9.34-1.01-1.59-2.57-2.61-4.28-2.98Z"/>
                        <path className="level-3-cls-1" d="m112.88,351.92c.18.29-.02.75-.46,1.02-.44.28-.94.27-1.12-.02-.18-.29.02-.75.46-1.02.44-.28.94-.27,1.12.02Z"/>
                      </g>
                      <g>
                        <path className="level-3-cls-33" d="m132.7,353.52c.75,3.66-1.6,7.24-5.26,7.99-3.66.75-7.23-1.6-7.99-5.26-.75-3.66,1.6-7.24,5.26-7.99,3.66-.75,7.23,1.6,7.99,5.26Z"/>
                        <path className="level-3-cls-39" d="m129.76,349.17c.52,3.52-1.79,6.89-5.32,7.61-1.82.37-3.61-.02-5.05-.96.02.12.03.25.06.37.75,3.66,4.33,6.01,7.99,5.26,3.66-.75,6.02-4.33,5.26-7.99-.38-1.84-1.48-3.35-2.94-4.3Z"/>
                        <path className="level-3-cls-1" d="m125.88,350.04c.07.33-.29.69-.79.79-.51.1-.97-.08-1.04-.41-.07-.33.29-.69.79-.79.51-.1.97.08,1.04.42Z"/>
                      </g>
                      <g>
                        <path className="level-3-cls-33" d="m117.86,345.02c.75,3.66-1.6,7.23-5.26,7.99-3.66.75-7.23-1.6-7.99-5.26-.75-3.66,1.6-7.23,5.26-7.99,3.66-.75,7.24,1.61,7.99,5.26Z"/>
                        <path className="level-3-cls-39" d="m114.91,340.67c.52,3.53-1.79,6.89-5.32,7.62-1.82.37-3.61-.02-5.05-.96.02.12.03.25.06.37.75,3.66,4.33,6.01,7.99,5.26,3.66-.75,6.01-4.33,5.26-7.99-.38-1.84-1.48-3.35-2.94-4.31Z"/>
                        <path className="level-3-cls-28" d="m111.03,341.55c.07.33-.29.69-.79.79-.51.1-.97-.08-1.04-.41-.07-.33.29-.69.79-.79.51-.1.97.08,1.04.42Z"/>
                      </g>
                      <g>
                        <path className="level-3-cls-33" d="m127.22,346.34c.75,3.66-1.6,7.23-5.26,7.99-3.66.75-7.24-1.6-7.99-5.27-.75-3.66,1.6-7.23,5.26-7.99,3.66-.75,7.23,1.6,7.99,5.26Z"/>
                        <path className="level-3-cls-39" d="m124.27,341.99c.52,3.53-1.79,6.89-5.32,7.62-1.81.37-3.61-.02-5.05-.96.02.12.03.25.06.37.75,3.66,4.33,6.02,7.99,5.27,3.66-.75,6.02-4.33,5.26-7.99-.38-1.84-1.48-3.35-2.94-4.31Z"/>
                        <path className="level-3-cls-28" d="m120.39,342.87c.07.33-.29.69-.79.79-.51.1-.97-.08-1.04-.42-.07-.33.29-.69.79-.79.51-.1.97.08,1.04.42Z"/>
                      </g>
                    </g>
                  </g>
                  <g>
                    <path className="level-3-cls-13" d="m156.1,337.34c0-.41-.25-2.55-3.04-5.11-.31-.28-.75-.48-.76-.83-.17-4.02,0-13.99,0-13.99,0,0-.22-.48-.52-.57-1.11-.32-2.23-.34-3.35-.12-.75.14-.89.19-.9.69h0c0,.12,0,.25,0,.42,0,0,0,.01,0,.02,0,0,.21,9.43,0,13.41-.02.39-.44.64-.8.91-2.14,1.63-3.14,4.28-3.14,5.45.02,5.2.01,26.19,0,31.49,0,.6.2,1.1.67,1.41.55.35,1.13.69,1.75.88,2.31.69,4.65.71,7,.19.81-.18,1.6-.42,2.27-.92.48-.36.84-.79.83-1.45,0-10.62,0-21.25-.01-31.87Z"/>
                    <path className="level-3-cls-11" d="m156.1,337.34c0-.31-.35-3.22-3.76-5.65,6.67,10.28-.86,27.19-8.76,25.13,0,2.16,0,11.18,0,12.28,0,.6.2,1.1.67,1.41.55.35,1.13.69,1.75.88,2.31.69,4.65.71,7,.19.81-.18,1.6-.42,2.27-.92.48-.36.84-.79.83-1.45,0-10.62,0-21.25-.01-31.87Z"/>
                    <path className="level-3-cls-15" d="m146.46,353.16c0,.52-.42.95-.95.95h0c-.52,0-.94-.42-.94-.95v-14.77c0-.52.42-.95.94-.95h0c.52,0,.95.42.95.95v14.77Z"/>
                    <path className="level-3-cls-15" d="m149.01,330.37c0,.25-.2.45-.45.45h0c-.25,0-.45-.2-.45-.45v-11.02c0-.25.2-.45.45-.45h0c.25,0,.45.2.45.45v11.02Z"/>
                    <path className="level-3-cls-14" d="m153.14,317.31c0,.58-.47,1.06-1.06,1.06h-4.46c-.58,0-1.06-.47-1.06-1.06h0c0-.58.47-1.06,1.06-1.06h4.46c.58,0,1.06.48,1.06,1.06h0Z"/>
                    <path className="level-3-cls-10" d="m156.11,349.76c0-.31-2.97,16.93-12.52,12.71,0,2.15,0,5.54,0,6.63,0,.6.2,1.1.67,1.41.55.35,1.13.69,1.75.88,2.31.69,4.65.71,7,.19.81-.18,1.6-.42,2.27-.92.48-.36.84-.79.83-1.45,0-10.62,0-8.82,0-19.44Z"/>
                  </g>
                  <g>
                    <polygon className="level-3-cls-34" points="160.5 361.91 180.07 351.75 206.4 364.47 186.61 375.06 160.5 361.91"/>
                    <polygon className="level-3-cls-28" points="186.77 371.14 186.77 375.06 160.5 361.91 160.5 357.58 186.77 371.14"/>
                    <polygon className="level-3-cls-34" points="160.5 357.79 180.07 347.63 206.4 360.36 186.61 370.95 160.5 357.79"/>
                    <polygon className="level-3-cls-32" points="204.32 361.47 204.32 364.71 186.77 373.89 186.77 370.95 204.32 361.47"/>
                    <polygon className="level-3-cls-26" points="173.64 359.01 175.7 360.04 186.77 353.73 184.42 352.81 173.64 359.01"/>
                    <polygon className="level-3-cls-26" points="176.89 360.86 178.95 361.89 190.02 355.57 187.67 354.65 176.89 360.86"/>
                  </g>
                </g>
              </g>
              <g style={{ transform: `translateX(${Math.min(0, props.offsetY * 0.4 - (props.sectionRef.current?.offsetTop ? props.sectionRef.current.offsetTop -(props.sectionRef.current ? props.sectionRef.current?.getBoundingClientRect().height * 1.75: 0): 0)) }px)` }}>
                <g>
                  <polygon className="level-3-cls-32" points="369.1 454.67 305.38 463.93 333.1 482.57 401.2 471.52 369.1 454.67"/>
                  <polygon className="level-3-cls-34" points="307.11 464.9 311.86 381.78 320.71 381.78 311.86 464.24 307.11 464.9"/>
                  <polygon className="level-3-cls-34" points="370.88 456.06 365.02 395.17 356.46 392.58 366.32 456.69 370.88 456.06"/>
                  <polygon className="level-3-cls-26" points="391.12 380.32 390.46 409.15 319.25 412.74 319.25 381.82 391.12 380.32"/>
                  <polygon className="level-3-cls-35" points="369.85 370.57 300.39 372.13 319.25 381.82 391.12 380.32 369.85 370.57"/>
                  <polygon className="level-3-cls-34" points="319.25 412.74 319.25 381.82 300.39 372.13 300.39 397.38 319.25 412.74"/>
                  <g>
                    <polygon className="level-3-cls-28" points="369.85 370.57 300.39 372.13 319.25 381.82 391.12 380.32 369.85 370.57"/>
                    <g className="level-3-cls-17">
                      <g>
                        <line className="level-3-cls-18" x1="382.72" y1="382.38" x2="358.66" y2="370.01"/>
                        <line className="level-3-cls-18" x1="370.69" y1="381.82" x2="346.63" y2="369.45"/>
                        <line className="level-3-cls-18" x1="360.31" y1="381.82" x2="336.25" y2="369.45"/>
                        <line className="level-3-cls-18" x1="350.08" y1="382.38" x2="326.03" y2="370.01"/>
                        <line className="level-3-cls-18" x1="340.24" y1="382.38" x2="316.19" y2="370.01"/>
                        <line className="level-3-cls-18" x1="330.14" y1="383.05" x2="306.09" y2="370.68"/>
                      </g>
                    </g>
                  </g>
                  <g>
                    <polygon className="level-3-cls-26" points="397.44 471.56 376.41 395.17 366.87 395.84 393.41 472.53 397.44 471.56"/>
                    <polygon className="level-3-cls-26" points="332.49 481.98 332.49 398.15 342.54 397.87 338.01 481.2 332.49 481.98"/>
                  </g>
                  <g>
                    <path className="level-3-cls-27" d="m320.76,373.61c-4.31-2.32-8.18-4.42-10-5.42-.63-.35-.95-.22-.98-.1-.03.09-.22.33.31.68,1.65,1.09,5.72,3.32,10.24,5.72l.44-.88Z"/>
                    <g>
                      <path className="level-3-cls-36" d="m322.84,373.29c0,1.62-1.59,3.23-3.54,3.23s-3.21-1.61-3.21-3.23,1.26-2.94,3.21-2.94,3.54,1.32,3.54,2.94Z"/>
                      <path className="level-3-cls-38" d="m324.11,374.08c0,1.62-1.59,2.94-3.54,2.94s-3.3-1.32-3.3-2.94,1.35-2.94,3.3-2.94,3.54,1.32,3.54,2.94Z"/>
                      <path className="level-3-cls-36" d="m325.21,374.87c0,1.62-1.59,2.94-3.54,2.94s-3.54-1.32-3.54-2.94,1.75-3.33,3.71-3.33,3.37,1.71,3.37,3.33Z"/>
                      <path className="level-3-cls-38" d="m326.38,375.49c0,1.62-1.59,2.94-3.54,2.94s-3.54-1.32-3.54-2.94,1.59-2.94,3.54-2.94,3.54,1.32,3.54,2.94Z"/>
                      <path className="level-3-cls-36" d="m327.91,376.4c0,1.62-1.59,2.94-3.54,2.94s-3.54-1.32-3.54-2.94,1.59-2.94,3.54-2.94,3.54,1.32,3.54,2.94Z"/>
                      <path className="level-3-cls-38" d="m328.83,376.89c0,1.62-1.59,2.94-3.54,2.94s-3.54-1.32-3.54-2.94,1.59-2.94,3.54-2.94,3.54,1.32,3.54,2.94Z"/>
                      <path className="level-3-cls-36" d="m330.51,377.78c0,1.62-1.59,3.25-3.54,3.25s-3.54-1.62-3.54-3.25,1.51-3.18,3.46-3.18,3.62,1.56,3.62,3.18Z"/>
                      <path className="level-3-cls-38" d="m331.05,377.98c0,1.62-1.18,3.3-3.14,3.3s-3.54-1.32-3.54-2.94,1.59-2.94,3.54-2.94,3.14.95,3.14,2.58Z"/>
                    </g>
                    <path className="level-3-cls-36" d="m329.54,378.35c0,.65-.57,1.18-1.28,1.18s-1.28-.53-1.28-1.18.58-1.18,1.28-1.18,1.28.53,1.28,1.18Z"/>
                    <path className="level-3-cls-27" d="m328.62,377.78c4.28,2.38,8.12,4.52,9.95,5.51.63.34.7.68.61.78-.06.07-.16.37-.74.11-1.8-.8-5.88-3.03-10.33-5.55,0,0-.15-.21,0-.53.14-.31.51-.31.51-.31Z"/>
                  </g>
                  <g>
                    <path className="level-3-cls-27" d="m338.01,372.17c-4.31-2.32-8.18-4.42-10-5.42-.63-.35-.95-.22-.98-.1-.03.09-.22.33.31.68,1.65,1.09,5.72,3.32,10.24,5.72l.44-.88Z"/>
                    <g>
                      <path className="level-3-cls-36" d="m340.09,371.85c0,1.62-1.59,3.23-3.54,3.23s-3.21-1.61-3.21-3.23,1.26-2.94,3.21-2.94,3.54,1.32,3.54,2.94Z"/>
                      <path className="level-3-cls-38" d="m341.36,372.63c0,1.62-1.59,2.94-3.54,2.94s-3.3-1.32-3.3-2.94,1.35-2.94,3.3-2.94,3.54,1.32,3.54,2.94Z"/>
                      <path className="level-3-cls-36" d="m342.46,373.43c0,1.62-1.59,2.94-3.54,2.94s-3.54-1.32-3.54-2.94,1.75-3.33,3.71-3.33,3.37,1.71,3.37,3.33Z"/>
                      <path className="level-3-cls-38" d="m343.63,374.05c0,1.62-1.59,2.94-3.54,2.94s-3.54-1.32-3.54-2.94,1.59-2.94,3.54-2.94,3.54,1.32,3.54,2.94Z"/>
                      <path className="level-3-cls-36" d="m345.16,374.96c0,1.62-1.59,2.94-3.54,2.94s-3.54-1.32-3.54-2.94,1.59-2.94,3.54-2.94,3.54,1.32,3.54,2.94Z"/>
                      <path className="level-3-cls-38" d="m346.08,375.45c0,1.62-1.59,2.94-3.54,2.94s-3.54-1.32-3.54-2.94,1.59-2.94,3.54-2.94,3.54,1.32,3.54,2.94Z"/>
                      <path className="level-3-cls-36" d="m347.77,376.34c0,1.62-1.59,3.25-3.54,3.25s-3.54-1.62-3.54-3.25,1.51-3.18,3.46-3.18,3.62,1.56,3.62,3.18Z"/>
                      <path className="level-3-cls-38" d="m348.3,376.53c0,1.62-1.18,3.3-3.14,3.3s-3.54-1.32-3.54-2.94,1.59-2.94,3.54-2.94,3.14.95,3.14,2.58Z"/>
                    </g>
                    <path className="level-3-cls-36" d="m346.79,376.91c0,.65-.57,1.18-1.28,1.18s-1.28-.53-1.28-1.18.57-1.18,1.28-1.18,1.28.53,1.28,1.18Z"/>
                    <path className="level-3-cls-27" d="m345.87,376.34c4.28,2.38,8.12,4.52,9.95,5.51.63.34.7.68.61.78-.06.07-.16.37-.74.11-1.8-.8-5.88-3.03-10.33-5.54,0,0-.15-.21,0-.53.14-.31.51-.31.51-.31Z"/>
                  </g>
                  <g>
                    <path className="level-3-cls-27" d="m358.8,371.57c-4.31-2.32-8.18-4.42-10-5.42-.63-.35-.95-.22-.98-.1-.02.08-.22.33.31.68,1.65,1.09,5.72,3.32,10.24,5.72l.44-.88Z"/>
                    <g>
                      <path className="level-3-cls-36" d="m360.89,371.25c0,1.62-1.59,3.23-3.54,3.23s-3.21-1.61-3.21-3.23,1.25-2.94,3.21-2.94,3.54,1.32,3.54,2.94Z"/>
                      <path className="level-3-cls-38" d="m362.15,372.03c0,1.62-1.59,2.94-3.54,2.94s-3.3-1.32-3.3-2.94,1.35-2.94,3.3-2.94,3.54,1.32,3.54,2.94Z"/>
                      <path className="level-3-cls-36" d="m363.25,372.83c0,1.62-1.59,2.94-3.54,2.94s-3.54-1.32-3.54-2.94,1.75-3.33,3.71-3.33,3.37,1.71,3.37,3.33Z"/>
                      <path className="level-3-cls-38" d="m364.43,373.45c0,1.62-1.59,2.94-3.54,2.94s-3.54-1.32-3.54-2.94,1.59-2.94,3.54-2.94,3.54,1.32,3.54,2.94Z"/>
                      <path className="level-3-cls-36" d="m365.96,374.36c0,1.62-1.59,2.94-3.54,2.94s-3.54-1.32-3.54-2.94,1.59-2.94,3.54-2.94,3.54,1.32,3.54,2.94Z"/>
                      <path className="level-3-cls-38" d="m366.87,374.84c0,1.62-1.59,2.94-3.54,2.94s-3.54-1.32-3.54-2.94,1.59-2.94,3.54-2.94,3.54,1.32,3.54,2.94Z"/>
                      <path className="level-3-cls-36" d="m368.56,375.74c0,1.62-1.59,3.25-3.54,3.25s-3.54-1.62-3.54-3.25,1.51-3.18,3.46-3.18,3.62,1.56,3.62,3.18Z"/>
                      <path className="level-3-cls-38" d="m369.1,375.93c0,1.62-1.18,3.3-3.14,3.3s-3.54-1.32-3.54-2.94,1.59-2.94,3.54-2.94,3.14.95,3.14,2.58Z"/>
                    </g>
                    <path className="level-3-cls-36" d="m367.58,376.31c0,.65-.57,1.18-1.28,1.18s-1.28-.53-1.28-1.18.58-1.18,1.28-1.18,1.28.53,1.28,1.18Z"/>
                    <path className="level-3-cls-27" d="m366.66,375.74c4.28,2.38,8.12,4.52,9.95,5.5.63.34.7.68.61.78-.06.06-.16.36-.74.11-1.8-.8-5.88-3.03-10.33-5.54,0,0-.15-.21,0-.53.14-.31.51-.31.51-.31Z"/>
                  </g>
                </g>
                <g>
                  <path className="level-3-cls-32" d="m451.44,473.1c-2.33,4.86-15.6,9.83-30.43,3.05-14.71-6.72-23.83-.83-25.21-9.33-.83-5.13,16.48-8.36,32.51-6.24,16.03,2.12,25.37,7.83,23.13,12.52Z"/>
                  <g>
                    <g>
                      <path className="level-3-cls-42" d="m399.22,466.05c1.57-.86,4.85-2.01,6.93-6.32.44-.92.58-2.46.56-4.19-.03-.73-2.17-9.57-2.32-10.58l10.36-.97c-.17,2.04-.24,9.72-.2,11.36.07,3.22,1.64,5.08.85,7.09-.61,1.55-1.23,1.44-3.84,2.22-1.98.59-3.65,1.76-6.09,3.3-2.45,1.53-4.51,1.9-6.25,1.01-1.74-.88-1.56-2.08,0-2.93Z"/>
                      <path className="level-3-cls-42" d="m431.45,474.42c1.57-.85,4.85-2.01,6.93-6.32.44-.91.58-2.46.56-4.18-.03-.73-1.89-15.32-2.04-16.33h10.94c-.17,2.04-1.11,14.51-1.07,16.14.07,3.22,1.64,5.08.85,7.09-.61,1.56-1.23,1.44-3.84,2.22-1.98.59-3.65,1.76-6.09,3.3-2.45,1.53-4.51,1.9-6.25,1.01-1.73-.88-1.56-2.08,0-2.93Z"/>
                      <g>
                        <path className="level-3-cls-33" d="m415.34,442.59s1.97-6.81-3.86-30.87c-1.72-7.14,11.93-56.56,15.02-70.17,2.68-11.83,1.45-22,1.45-22l-23.57,1.46s-6.15,42.85-7.07,53.34c-1.34,15.22-3.5,26.97-2.86,35.96.86,12.04,8.21,32.43,8.21,32.43,0,0,2.51,1.51,5.4,1.51,3.95,0,7.27-1.67,7.27-1.67Z"/>
                        <path className="level-3-cls-39" d="m415.34,442.59s1.97-6.81-3.86-30.87c-1.72-7.14,11.93-56.56,15.02-70.17,2.68-11.83,1.45-22,1.45-22l-23.57,1.46s-6.15,42.85-7.07,53.34c-1.34,15.22-3.5,26.97-2.86,35.96.86,12.04,8.21,32.43,8.21,32.43,0,0,2.51,1.51,5.4,1.51,3.95,0,7.27-1.67,7.27-1.67Z"/>
                        <path className="level-3-cls-33" d="m436.25,316.75s7.02,6.96,8.08,31.39c.8,18.43.78,45.07,2.06,58.45,1.59,16.66,1.69,9.41,2.04,29.41.14,8,.23,11.58.23,11.58l-13.07-1.5s-2.41-22.99-4.92-28.84c-1.01-2.33-21.72-63.05-20.31-85.17.36-5.68,2.5-11.13,2.5-11.13,0,0,19.3-2.66,23.4-4.2Z"/>
                      </g>
                      <path className="level-3-cls-33" d="m401.58,441.27s.7,3.42.88,4.21c.17.79,0,1.75,0,1.75,0,0,3.25.7,5.79.88,2.54.17,5.62-.35,7.37-.97.94-.33.71-.35.71-.35v-6.94s-4.65,2.02-6.76,2.11c-3.95.18-7.99-.7-7.99-.7Z"/>
                      <path className="level-3-cls-33" d="m435.1,443.58s.23,3.69.4,4.48,0,1.75,0,1.75c0,0,3.25.7,5.79.88s5.62-.35,7.37-.97c.94-.33.71-.35.71-.35v-6.14s-4.65,1.22-6.76,1.31c-3.95.18-7.51-.97-7.51-.97Z"/>
                      <path className="level-3-cls-1" d="m449.01,443.12c-1.03.49-3.65.85-6.72.85s-5.69-.35-6.72-.85c-.3.14-.47.3-.47.47,0,.73,3.22,1.32,7.19,1.32s7.19-.59,7.19-1.32c0-.17-.17-.32-.48-.47Z"/>
                    </g>
                    <path className="level-3-cls-41" d="m407.76,271.25s-7.59,10.43-11.56,16.31c-3.97,5.88-6.82,7.51-9.38,13.53-1.75,4.11-.67,7.31,3.59,14,3.43,5.38,11.59,14.75,11.59,14.75l4.78-1.87s-9.45-16.2-11.41-21.83c-.57-1.65,0-2.39,5.95-6.8,3.25-2.41,7.17-6.04,9.81-10.4,2.64-4.36,4.17-8.96,2.38-12.03-1.79-3.07-5.74-5.65-5.74-5.65Z"/>
                    <path className="level-3-cls-31" d="m412.87,266.15c-3.15-.21-7.22,3.38-10.62,8.76-3.87,6.13-11.24,13.65-11.24,13.65l13.03,13.99s7.7-6.86,11.46-11.46c3.76-4.6,5.91-9.79,5.89-13.24-.02-3.45-.22-6.52-3.09-8.84-2.87-2.33-3.9-2.77-5.43-2.87Z"/>
                    <g>
                      <path className="level-3-cls-42" d="m428.24,259.17c-.68-3.2.22-18.62,0-19.36,0,0-3.69-6.43-12.85-5.22-5.47.73-7.33.57-7.42,8.7-.08,6.54,0,9.49,7.42,9.45.42,0,.81,0,1.21-.06.24,2.84.81,7.55-.56,9.79-3.37,5.54-7.32,7.14-7.32,7.14,0,0,3.14,1.33,7.27,2.54,4.12,1.19,4.28.26,10.26-.94,4.7-.96,8.48-5.6,8.48-5.6,0,0-5.61-2.29-6.5-6.45Z"/>
                      <path className="level-3-cls-33" d="m422.29,226.74c-6.97-.17-5.58,2.08-14.8,1.57-3.66-.21-5.74,3.07-5.69,4.66.14,4.51,4.1,6.65,6.47,5.4,2.44-1.29,4.49-3.93,11-.53,2.9,1.51,3.03,2.9,2.54,4.6.23-.2,1.81-.61,2.2-.51,2.22.62-.16,4.31-.52,5.71-.36,1.31.11,2.19,1.19,3.07,1.19.96,3.42.46,4.36-.97,1.99-3,1.29-5.86,1.69-8.08.25-1.4,2.85-6.31-.72-11.24-1.7-2.36-4.31-3.59-7.71-3.68Z"/>
                    </g>
                    <g>
                      <path className="level-3-cls-37" d="m440.55,290.16c2.28-5.75,3.76-11.85,3.47-14.83-1.12-11.29-12.34-11.8-13.29-12.07-.64-.18-3.17,8.16-12.65,7.63-7.99-.44-1.58-8.75-2.68-7.61-2.86,2.97-8.29,4.75-10.25,11.56-1.34,4.66-2.53,12.3-2.48,22.73.07,15.66-.53,31.28-.53,34.11,0,0,10.33-1.23,13.83-1.32,6.67-.17,26.82,1.32,26.82,1.32,0,0-4.89-20.2-4.83-26.74.04-3.75,1.05-10.91,2.59-14.78Z"/>
                      <path className="level-3-cls-31" d="m431.87,320.34c-14.96,0-27.27-13.22-28.83-32.7-.24,2.96-.38,6.27-.36,9.92.07,15.66-.53,31.28-.53,34.11,0,0,10.33-1.23,13.83-1.32,6.67-.17,26.82,1.32,26.82,1.32,0,0-1.67-7.27-2.9-13.2-2.67,1.09-5.08,1.86-8.02,1.86Z"/>
                    </g>
                    <g>
                      <path className="level-3-cls-40" d="m395.29,318.04c.2.44.19.89-.03.99-.22.1-.57-.18-.77-.62l-8.09-17.82h0s-.01,0-.01-.01c-.04-.09.11-.24.33-.34.22-.1.44-.11.48-.03,0,0,0,.01,0,.02h0s8.09,17.82,8.09,17.82Z"/>
                      <path className="level-3-cls-33" d="m392.74,302.6c.82,1.78-.34,4.06-2.59,5.1-2.25,1.03-4.74.43-5.56-1.35-.82-1.78.34-4.06,2.59-5.1,2.25-1.03,4.74-.43,5.56,1.36Z"/>
                      <path className="level-3-cls-1" d="m391.78,300.52c.82,1.78-.34,4.06-2.59,5.1-2.25,1.03-4.74.43-5.55-1.36-.82-1.78.34-4.06,2.59-5.1,2.25-1.03,4.74-.42,5.55,1.36Z"/>
                      <path className="level-3-cls-3" d="m388.69,304.53c-2,.92-4.18.46-5.08-.99.03.1.07.2.11.3.77,1.68,3.11,2.25,5.23,1.28,2.12-.97,3.21-3.12,2.44-4.79-.04-.1-.1-.19-.15-.28.52,1.62-.56,3.58-2.56,4.5Z"/>
                      <path className="level-3-cls-3" d="m389.79,306.92c-1.99.92-4.18.46-5.08-.99.03.1.07.2.12.3.77,1.68,3.11,2.25,5.23,1.28,2.12-.97,3.21-3.12,2.44-4.8-.04-.1-.09-.19-.15-.28.52,1.62-.56,3.58-2.56,4.5Z"/>
                      <path className="level-3-cls-1" d="m390.88,298.55c.82,1.78-.34,4.06-2.59,5.1-2.25,1.03-4.74.42-5.56-1.36-.82-1.78.34-4.06,2.59-5.1,2.25-1.03,4.74-.43,5.56,1.35Z"/>
                      <path className="level-3-cls-33" d="m390.09,296.84c.82,1.78-.34,4.06-2.59,5.09-2.25,1.03-4.74.43-5.55-1.35-.82-1.78.34-4.06,2.59-5.1,2.25-1.03,4.74-.43,5.56,1.36Z"/>
                      <path className="level-3-cls-1" d="m388.99,296.24c.52,1.12-.58,2.73-2.45,3.59-1.87.86-3.81.64-4.32-.48-.52-1.12.58-2.73,2.46-3.59,1.87-.86,3.8-.64,4.32.48Z"/>
                      <path className="level-3-cls-3" d="m383.09,299.69c-.58-1.26.49-2.67,1.34-3.06,1.49-.68,2.97-.45,3.33.66.17.51.28,1.02.19,1.32.39-.59,1.07-1.75.83-2.26-.49-1.06-2.3-1.26-4.06-.45-1.76.81-2.79,2.32-2.31,3.37.17.37.51.63.95.78-.12-.1-.22-.22-.28-.36Z"/>
                      <path className="level-3-cls-3" d="m386.99,300.82c-1.99.91-4.18.46-5.08-.99.03.1.07.2.12.3.77,1.68,3.11,2.25,5.23,1.28,2.12-.97,3.21-3.12,2.44-4.8-.05-.1-.1-.19-.15-.28.52,1.63-.56,3.58-2.56,4.5Z"/>
                      <path className="level-3-cls-33" d="m389.75,296.09c.82,1.78-.34,4.06-2.59,5.1-2.25,1.03-4.74.43-5.56-1.36-.82-1.78.34-4.06,2.59-5.1,2.25-1.03,4.74-.42,5.56,1.36Z"/>
                      <path className="level-3-cls-1" d="m388.79,294.01c.82,1.78-.34,4.06-2.59,5.09-2.25,1.03-4.74.43-5.56-1.35-.82-1.78.34-4.06,2.59-5.1,2.25-1.03,4.74-.43,5.55,1.36Z"/>
                      <path className="level-3-cls-3" d="m385.7,298.03c-2.17,1-4.51.61-5.42-.83.03.1.07.2.11.3.77,1.68,3.27,2.17,5.58,1.11,2.31-1.06,3.56-3.28,2.79-4.95-.04-.1-.1-.19-.15-.28.5,1.63-.73,3.66-2.9,4.65Z"/>
                      <path className="level-3-cls-3" d="m386.8,300.41c-1.99.91-4.18.46-5.08-.99.03.1.07.2.12.3.77,1.68,3.11,2.25,5.23,1.28,2.12-.97,3.21-3.12,2.44-4.8-.05-.1-.1-.19-.15-.28.52,1.62-.56,3.58-2.56,4.5Z"/>
                      <path className="level-3-cls-1" d="m387.89,292.04c.82,1.78-.34,4.06-2.59,5.09-2.25,1.03-4.74.43-5.56-1.35-.82-1.78.34-4.06,2.6-5.1,2.25-1.03,4.74-.43,5.55,1.36Z"/>
                      <path className="level-3-cls-33" d="m387.11,290.33c.82,1.78-.34,4.06-2.59,5.09-2.25,1.03-4.74.43-5.56-1.36-.82-1.78.34-4.06,2.59-5.09,2.25-1.03,4.74-.43,5.56,1.36Z"/>
                      <path className="level-3-cls-1" d="m386,289.74c.51,1.12-.58,2.73-2.46,3.59-1.87.86-3.81.65-4.32-.48-.51-1.12.58-2.73,2.45-3.59,1.87-.86,3.81-.64,4.32.48Z"/>
                      <path className="level-3-cls-3" d="m380.1,293.18c-.58-1.26.49-2.67,1.34-3.06,1.49-.68,2.97-.45,3.33.66.17.51.27,1.02.19,1.32.39-.59,1.07-1.74.83-2.26-.49-1.06-2.3-1.26-4.06-.45-1.76.81-2.79,2.32-2.31,3.37.17.37.51.63.95.78-.12-.1-.22-.22-.28-.36Z"/>
                      <path className="level-3-cls-3" d="m384,294.31c-2.17,1-4.51.61-5.42-.83.03.1.07.2.12.3.77,1.68,3.26,2.17,5.58,1.11,2.31-1.06,3.56-3.28,2.79-4.95-.04-.1-.1-.19-.15-.28.5,1.63-.73,3.66-2.9,4.66Z"/>
                      <path className="level-3-cls-3" d="m383.2,290.63c.11.23-.14.57-.54.75-.41.19-.82.15-.92-.08-.11-.23.14-.57.54-.75.4-.19.82-.15.92.08Z"/>
                      <path className="level-3-cls-40" d="m376.28,276.43c-.2-.45-.55-.72-.77-.62-.22.1-.24.55-.03.99l6.55,14.27h0s0,0,0,.01c.04.09.25.08.48-.03.22-.1.37-.25.33-.34,0,0-.01,0-.01-.01h0s-6.55-14.27-6.55-14.27Z"/>
                    </g>
                    <g>
                      <g>
                        <g>
                          <path className="level-3-cls-42" d="m404.74,316.34c.29-.59-3.31-2.23-7.13-3.5-.86-.29-3.07-1.04-3.6-.31-.45.63,2.17,2.46,2.17,2.46,0,0-1.95,1.76-3.53-.6-1.31-1.96-1.34,5.77.82,7.16,5.22,3.37,11.3-.47,11.3-.47l-.04-4.74Z"/>
                          <path className="level-3-cls-42" d="m443.86,270.44c-2.53-2.93-9.49-3.54-12.26.13-4.96,6.57-.93,12.39,1.33,20.91.96,3.62,1.75,9.52,2.26,13.72.26,2.19-.37,5.86-5.72,6.48-9.15,1.05-25.05,4.16-25.05,4.16l-2.69,6.11c3.63-2.27,17.16,1.23,30.65-.21,5.46-.58,10.16-2.11,12.52-4.48,3.75-3.77,3.12-7.1,3.43-12.63.54-9.56.3-17.35-.03-21.88-.47-6.58-2.77-10.36-4.45-12.31Z"/>
                        </g>
                        <g>
                          <path className="level-3-cls-40" d="m406.19,315.5s-.53,2.37-.31,3.46c.21,1.1.71,2.2.71,2.2l2.15.06s-.86-3.52-.79-4.31c.07-.79.49-1.84.49-1.84l-2.25.42Z"/>
                          <path className="level-3-cls-25" d="m408.73,318.31c0,.99-.8,1.79-1.79,1.79s-1.79-.8-1.79-1.79.8-1.79,1.79-1.79,1.79.8,1.79,1.79Z"/>
                          <rect className="level-3-cls-33" x="406.2" y="318.3" width="1.07" height=".29"/>
                          <polygon className="level-3-cls-33" points="406.99 318.48 406.94 317.43 407.23 317.41 407.27 318.47 406.99 318.48"/>
                        </g>
                      </g>
                      <path className="level-3-cls-37" d="m431.24,268.03c-2.44,2-2.97,7.4-1.77,13.66,1.36,7.13,1.12,17.64,1.12,17.64l19.62-.66s.39-8.3,0-14.22c-.4-5.92-2.37-11.19-4.74-13.69-2.37-2.5-4.61-4.61-8.29-4.35-3.69.26-4.74.64-5.93,1.62Z"/>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Level3
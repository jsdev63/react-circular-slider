import React from "react";
import CircularSlider from "./CircularSlider";
// import { ReactComponent as DragIcon } from './assets/arrow.svg';
import { ReactComponent as SlideIcon } from "./assets/slide.svg";

const App = () => {
  const styles = {
    wrapper: {
      margin: "2rem",
    },

    h3: {
      margin: "3rem 0 2rem 0",
    },

    pre: {
      fontSize: "0.9rem",
      borderRadius: "0.3rem",
      backgroundColor: "#eeeeee",
      padding: "0.5rem",
    },

    slider: {
      padding: "0 0 0.5rem 0",
    },
  };

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.h3}>
        Anticlockwise rotation with the knob positioned to the right and "°" appended to the value:
      </h3>
      <div style={styles.slider}>
        <CircularSlider
          width={400}
          limit={270}
          offsetAngle={-45}
          labelOffset={20}
          direction={1}
          data={[
            {
              key: 1,
              value: "STAFFING",
            },
            {
              key: 2,
              value: "TEAM",
            },
            {
              key: 1,
              value: "PROJECT",
            },
            {
              key: 1,
              value: "MANAGED",
            },
          ]}
          knobPosition="bottom"
          valueFontSize="2rem"
          renderLabelValue={null}
          progressLineCap="flat"
          progressSize={16}
          progressColorFrom={"#5215FC"}
          progressColorTo={"#280885"}
          doubleLineType={"track"}
          trackColor="#a9a9a9"
          trackSize={16}
          knobColor="blue"
          knobSize={56}
        ></CircularSlider>
      </div>
      <pre className={styles.pre}>
        {`<CircularSlider
  width={400}
  limit={270}
  offsetAngle={-45}
  labelOffset={20}
  direction={1}
  data={[
    {
      key: 1,
      value: "STAFFING",
    },
    {
      key: 2,
      value: "TEAM",
    },
    {
      key: 1,
      value: "PROJECT",
    },
    {
      key: 1,
      value: "MANAGED",
    }
  ]}
  knobPosition="bottom"
  valueFontSize="2rem"
  renderLabelValue={null}
  progressLineCap="flat"
  progressSize={24}
  trackColor="#eeeeee"
  trackSize={24}
  knobColor = "blue"
  knobSize= {56}
/>`}
      </pre>
      <h3 className={styles.h3}>A custom knob icon and the label on the bottom and double progress line</h3>
      <div className={styles.slider}>
        <CircularSlider
          width={400}
          limit={270}
          offsetAngle={-45}
          labelOffset={20}
          direction={1}
          data={[
            {
              key: 1,
              value: "STAFFING",
            },
            {
              key: 2,
              value: "TEAM",
            },
            {
              key: 1,
              value: "PROJECT",
            },
            {
              key: 1,
              value: "MANAGED",
            },
          ]}
          knobPosition="bottom"
          valueFontSize="2rem"
          renderLabelValue={null}
          progressLineCap="flat"
          progressSize={16}
          progressColorFrom={"#5215FC"}
          progressColorTo={"#280885"}
          doubleLineType="progress"
          trackColor="#a9a9a9"
          trackSize={16}
          knobColor="blue"
          knobSize={40}
          knobEl={<SlideIcon width={40} height={40} />}
        ></CircularSlider>
      </div>
      <pre className={styles.pre}>
        {`import { ReactComponent as PowerIcon } from './assets/power.svg';
.
.
.
<CircularSlider
width={400}
limit={270}
offsetAngle={-45}
labelOffset={20}
direction={1}
data={[
  {
    key: 1,
    value: "STAFFING",
  },
  {
    key: 2,
    value: "TEAM",
  },
  {
    key: 1,
    value: "PROJECT",
  },
  {
    key: 1,
    value: "MANAGED",
  }
]}
knobPosition="bottom"
valueFontSize="2rem"
renderLabelValue={null}
progressLineCap="flat"
progressSize={16}
progressColorFrom={'#5215FC'}
progressColorTo={'#280885'}
doubleLineType="progress"
trackColor="#a9a9a9"
trackSize={16}
knobColor = "blue"
knobSize= {40}
knobEl={<SlideIcon width={40} height={40} />}
>
</CircularSlider>`}
      </pre>
      <h3 className={styles.h3}>
        A flat line cap with the track size smaller than the progress track size and a smiley knob:
      </h3>
      <div className={styles.slider}>
        {/* <CircularSlider
          label="Alphabet"
          progressLineCap="flat"
          dataIndex={1}
          max={270}
          width={250}
          labelColor="#212121"
          valueFontSize="6rem"
          verticalOffset="1rem"
          knobColor="#212121"
          progressColorFrom="#ff8500"
          progressColorTo="#a15400"
          progressSize={12}
          trackColor="#eeeeee"
          trackSize={10}
          data={"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}
        >
          <EmojiIcon x="9" y="9" width="18px" height="18px" />
        </CircularSlider> */}
      </div>
      <pre className={styles.pre}>
        {`
import { ReactComponent as EmojiIcon } from './assets/emoji.svg';
.
.
.
<CircularSlider
    width={200}
    progressLineCap="flat"
    dataIndex={1}
    label="Alphabet"
    data=["A","B","C"]//...
    labelColor="#212121"
    valueFontSize="6rem"
    verticalOffset="1rem"
    knobColor="#212121"
    progressColorFrom="#ff8500"
    progressColorTo="#a15400"
    progressSize={8}
    trackColor="#eeeeee"
    trackSize={4}
>
    <EmojiIcon x="9" y="9" width="18px" height="18px" />
</CircularSlider>`}
      </pre>
    </div>
  );
};

export default App;

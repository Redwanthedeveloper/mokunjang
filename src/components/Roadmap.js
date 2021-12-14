import roadmapImage from '../images/roadmap.png';
export default ({ roadMapGoalsArray, roadMapSubtitleText }) => {
  const renderRoadMapGoals = (goalArray) => {
    return goalArray.map((goal) => {
      const { percentage, isDone, text } = goal;
      const backgroundColor = {
        backgroundColor: isDone === true ? '#0FA3B1' : '#0d7079',
      };
      const isLastGoal = goalArray[goalArray.length - 1] === goal;
      const isTextGray = { color: isDone === true ? 'gray' : 'white' };
      return (
        <div className='roadmapGoal' key={percentage}>
          <div style={backgroundColor}>{`${percentage}%`}</div>
          {isLastGoal === true ? <></> : ''}
          <p style={isTextGray}>
            {isDone === true ? <span></span> : <></>} {text}
          </p>
        </div>
      );
    });
  };
  return (
    <div className='roadmapContainer' id='roadmap'>
      <h1>ROADMAP</h1>
      <p>{roadMapSubtitleText}</p>
      <div className='roadmap'>
        <div className='roadmapTextAndBubbles'>
          {renderRoadMapGoals(roadMapGoalsArray)}
        </div>
        <div className='monkeyPic'>
          <img src={roadmapImage} alt='' />
        </div>
      </div>
    </div>
  );
};

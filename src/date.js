//jshint esversion:6

const GetDay = () => {

  const today = new Date();

  const options = {
    weekday: "long"
  };
  const day =today.toLocaleDateString("en-US", options);

  return(<div id="today">{day}</div>);

}

export default GetDay;
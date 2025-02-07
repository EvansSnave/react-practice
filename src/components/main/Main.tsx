import "../../style/components/main.scss";
import Card from "../Card";
import CustomButton from "../CustomButton";

const Main = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {

  }

  return (
    <main>
      <div>
        <h1>Title</h1>
        <h2>Subtitle</h2>
        <div>
          <CustomButton text="Button" type="main-button" functionality={ handleClick } />
          <CustomButton text="Button" type="secondary-button" functionality={ handleClick } />
        </div>
        <div>
          <Card title="Title" text="lorrrems s adad dadadafaf asa dadadafaffa adassadfaf asa dff d" />

        </div>
      </div>
      <aside></aside>
    </main>
  )
}

export default Main;

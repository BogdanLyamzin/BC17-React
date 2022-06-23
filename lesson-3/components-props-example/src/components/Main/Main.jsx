import Button from "../Button";

const Main = ({title, content}) => {
    return (
        <main>
            <h1>{title}</h1>
            {content && <p>{content}</p>}
            <Button text="Load more" active />
            {/* 
            const props = {
                text: "Load more",
                active: true
            }
            Button(props)
            */}
        </main>
    )
}

export default Main;
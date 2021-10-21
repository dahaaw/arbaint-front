import Header from "@organisms/Header";
import Footer from "@organisms/Footer";
import Content from "@organisms/Content";

export default function Layout(props) {
    return (
        <div className="flex flex-col h-screen container border m-auto">
            {/* <Header /> */}
            <Content>{props.children}</Content> 
            <Footer />
        </div>
    )
}

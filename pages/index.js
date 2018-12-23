import Head from "next/head"
import stylesheet from 'styles/main.scss'

import Header from "../components/Header"
import Footer from "../components/Footer"

class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="body">
                <div>
                    <Head>
                        <title>Artisan Asad</title>
                    </Head>

                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                    <div id="wrapper">
                        <Header />
                        <Footer />
                    </div>

                    <div id="bg" />
                </div>
            </div>
        )
    }
}

export default IndexPage

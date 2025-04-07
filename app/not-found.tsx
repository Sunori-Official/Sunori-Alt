import Header from './modules/Header/Header'
import Footer from './modules/Footer/Footer'
export default function NotFound() {
    return (
        <div>
            <Header />
            <div id="ErrPage">
                <h1 id="Err404">Error 404 - Page Not Found</h1>
            </div>
            <Footer />
        </div>
    );
  }
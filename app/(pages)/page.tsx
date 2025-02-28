import Faq from "../components/landing-page/faq"
import Footer from "../components/landing-page/footer"
import Header from "../components/landing-page/header"
import Hero from "../components/landing-page/hero"
import Pricing from "../components/landing-page/pricing"
import VideoExplanation from "../components/landing-page/video-explanation"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  )
}

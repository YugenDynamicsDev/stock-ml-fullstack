import Header from "@/components/app_components/header"
import Home from "@/pages/Home.tsx"
import Footer from "@/components/app_components/footer.tsx"

function App() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Header />

      <Home />

      <Footer />
    </div>
  )
}

export default App

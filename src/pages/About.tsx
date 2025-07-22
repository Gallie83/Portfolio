import { Card, CardContent, CardHeader} from "@/components/ui/card"

function About() {
  return (
    <div className="py-16 px-4 mx-8">
      
      <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
        <CardHeader className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">About Me</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </CardHeader>
        <CardContent className="flex justify-between p-8 md:p-12">
          {/* Left Section */}
          <div className="flex-1 flex flex-col">
            <div className="bg-blue-500">Image placeholder</div>
            <div className="bg-green-500">Certificates placeholder</div>
          </div>

          {/* Right Section */}
          <div className="flex-1 space-y-6 text-lg leading-relaxed text-gray-700">
            <p className="text-xl font-medium text-gray-900">
              Welcome to my website! I'm Kevin, a Full Stack developer currently based in Vancouver, B.C.
            </p>
            
            <p>
              I'm passionate about making a difference through software and connecting with like-minded professionals. I believe collaboration is the best method for growth and always embrace the chance to learn from others.
            </p>
            
            <p>
              I've built projects from e-commerce sites to blockchain applications and recently I've been diving into AI and exploring how it can enhance user experiences and workflows.
            </p>
            
            <p>
              When I'm not writing code, you'll usually find me out enjoying Vancouver's beautiful scenery or training Muay Thai! 
            </p>
            
            <p className="text-xl font-medium text-blue-600 pt-4">
              Get in touch - I'd love to connect!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default About
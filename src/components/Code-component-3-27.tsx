import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { 
  UserPlus, 
  CreditCard, 
  BarChart3,
  ArrowRight 
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in seconds with our simple onboarding process."
  },
  {
    icon: CreditCard,
    title: "Connect Accounts",
    description: "Securely link your bank accounts and credit cards for automatic tracking."
  },
  {
    icon: BarChart3,
    title: "Track & Optimize",
    description: "Monitor your finances and get personalized insights to reach your goals."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            How FINflow Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with FINflow in just three simple steps and begin your journey 
            to financial clarity.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-primary">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-muted-foreground mt-3" />
                )}
              </div>
            ))}
            
            <div className="pt-6">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559659386-5b78a2a4290c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBiYW5raW5nfGVufDF8fHx8MTc1NzE5NDE2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mobile Banking Interface"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
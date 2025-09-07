import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const benefits = [
  "Free forever plan available",
  "Bank-level security",
  "No hidden fees",
  "24/7 customer support"
];

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to take control of your finances?
              </h2>
              <p className="text-lg text-white/80">
                Join over 50,000 users who have already transformed their financial future with Finflow.
              </p>
            </div>
            
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                Schedule Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://i.pinimg.com/1200x/fd/e7/42/fde742f07ce1e6d49c1ed4e2735e0030.jpg"
                  alt="Savings Goals Planning"
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
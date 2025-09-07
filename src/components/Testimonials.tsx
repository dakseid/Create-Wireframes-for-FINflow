import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    avatar: "SJ",
    content: "FINflow transformed how I manage my finances. The budgeting tools are intuitive and the savings goals feature keeps me motivated.",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Software Engineer",
    avatar: "MC",
    content: "As someone who loves data, I appreciate how FINflow presents my financial information. The insights are incredibly valuable.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    avatar: "ER",
    content: "Managing both personal and business finances used to be overwhelming. FINflow makes it simple and gives me peace of mind.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            What our users are saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users who have transformed their financial lives with FINflow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3 pt-4">
                  <Avatar>
                    <AvatarFallback className="bg-accent text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
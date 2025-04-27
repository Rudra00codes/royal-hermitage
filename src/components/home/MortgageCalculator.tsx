
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Wallet } from "lucide-react";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const calculateMortgage = () => {
    const principal = homePrice * (1 - downPayment / 100);
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return Math.round(monthlyPayment);
  };

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-3xl font-playfair">Mortgage Calculator</CardTitle>
              <p className="text-muted-foreground mt-2">
                Estimate your monthly mortgage payments
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Home Price</label>
                <div className="flex gap-4">
                  <Input
                    type="number"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="flex-1"
                  />
                  <Slider
                    value={[homePrice]}
                    onValueChange={([value]) => setHomePrice(value)}
                    min={100000}
                    max={2000000}
                    step={10000}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Down Payment (%)</label>
                <div className="flex gap-4">
                  <Input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="flex-1"
                  />
                  <Slider
                    value={[downPayment]}
                    onValueChange={([value]) => setDownPayment(value)}
                    min={5}
                    max={50}
                    step={1}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Interest Rate (%)</label>
                <div className="flex gap-4">
                  <Input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="flex-1"
                    step="0.1"
                  />
                  <Slider
                    value={[interestRate]}
                    onValueChange={([value]) => setInterestRate(value)}
                    min={1}
                    max={15}
                    step={0.1}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Loan Term (Years)</label>
                <div className="flex gap-4">
                  <Input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="flex-1"
                  />
                  <Slider
                    value={[loanTerm]}
                    onValueChange={([value]) => setLoanTerm(value)}
                    min={5}
                    max={30}
                    step={5}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg text-center">
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  Estimated Monthly Payment
                </p>
                <p className="text-4xl font-bold">
                  ${calculateMortgage().toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Principal and Interest only
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator;

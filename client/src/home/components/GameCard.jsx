import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
export default function GameCard() {
  return (
    <Card className="p-4 shadow-lg flex flex-col justify-between h-64 border border-black">
      <div className="flex-grow">
        <CardTitle className="text-xl text-center mb-2 border rounded-lg">
          Game ID: 1111
        </CardTitle>
        <CardContent className="p-3 mt-2 border rounded-lg">
          <Label className="text-md mb-1">Players (2): </Label>
          <ul className="list-none grid grid-cols-2 gap-x-1 gap-y-1 mt-2 text-sm text-center">
            <li className="text-blue">JohnDoe - BLUE</li>
            <li className="text-pink">JaneDoe - PINK</li>
            <li className="text-blue">JohnDoe - BLUE</li>
            <li className="text-pink">JaneDoe - PINK</li>
            <li className="text-blue">JohnDoe - BLUE</li>
            <li className="text-pink">JaneDoe - PINK</li>
          </ul>
        </CardContent>
      </div>
      <CardFooter className="flex justify-between p-4">
        <Button className="bg-[#4CAF50]">Join</Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  );
}

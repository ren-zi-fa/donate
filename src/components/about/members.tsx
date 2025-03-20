import { Card, CardFooter, CardHeader } from "../ui/card";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

export default function Members() {
  return (
    <div className="h-fit mt-10">
      <h1 className="text-sm  font-semibold tracking-wide bg-orange-200 w-fit mx-auto rounded-4xl p-2 text-orange-500">
        Team members
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4  gap-4 justify-center p-8">
        <Card>
          <CardHeader>
            <img src={team1} alt="team" />
          </CardHeader>
          <CardFooter>
            <div className="flex flex-col text-center mx-auto">
              <div className="font-bold text-2xl">Full Name</div>
              <div className="text-orange-600">Position</div>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <img src={team2} alt="team" />
          </CardHeader>
          <CardFooter>
            <div className="flex flex-col text-center mx-auto">
              <div className="font-bold text-2xl">Full Name</div>
              <div className="text-orange-600">Position</div>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <img src={team3} alt="team" />
          </CardHeader>
          <CardFooter>
            <div className="flex flex-col text-center mx-auto">
              <div className="font-bold text-2xl">Full Name</div>
              <div className="text-orange-600">Position</div>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <img src={team4} alt="team" />
          </CardHeader>
          <CardFooter>
            <div className="flex flex-col text-center mx-auto">
              <div className="font-bold text-2xl">Full Name</div>
              <div className="text-orange-600">Position</div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

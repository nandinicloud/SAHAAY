import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, PlusCircle, Search, Star, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const [role, setRole] = useState("");

  if (!role) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-900 to-green-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          SAHAAY
        </motion.h1>
        <p className="mb-8 text-lg">Neighbors Helping Neighbors</p>
        <div className="flex gap-4">
          <Button onClick={() => setRole("requester")} className="bg-white text-green-800 font-semibold px-6 py-3 rounded-2xl shadow-lg">
            I Need Help
          </Button>
          <Button onClick={() => setRole("tasker")} className="bg-white text-green-800 font-semibold px-6 py-3 rounded-2xl shadow-lg">
            I Want to Work
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">Welcome to SAHAAY</h2>
        <User className="w-8 h-8 text-green-700" />
      </header>

      {role === "requester" ? (
        <div>
          <Button className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-xl mb-4">
            <PlusCircle className="w-5 h-5" /> Post a Task
          </Button>

          <h3 className="text-lg font-semibold mb-3">Nearby Helpers</h3>
          <div className="grid gap-4">
            {[1, 2, 3].map((id) => (
              <Card key={id} className="shadow-md">
                <CardContent className="flex justify-between items-center p-4">
                  <div>
                    <p className="font-semibold">Helper {id}</p>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4" /> 4.{id}
                    </div>
                    <p className="text-sm text-gray-600">2 km away</p>
                  </div>
                  <Button className="bg-green-600 text-white">View</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Search className="w-5 h-5 text-green-700" /> Available Tasks
          </h3>
          <div className="grid gap-4">
            {[1, 2, 3].map((id) => (
              <Card key={id} className="shadow-md">
                <CardContent className="flex justify-between items-center p-4">
                  <div>
                    <p className="font-semibold">Task {id}</p>
                    <p className="text-sm text-gray-600">Babysitting • Today 5pm</p>
                    <p className="text-green-700 font-medium">₹300</p>
                  </div>
                  <Button className="bg-green-600 text-white">Apply</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <footer className="mt-10 flex justify-center gap-6 text-green-700">
        <ShieldCheck className="w-6 h-6" />
        <p className="text-sm">Verified & Trusted Community</p>
      </footer>
    </div>
  );
}

import React from "react";
import LoadInjectors from "./LoadInjectors";

const SessionTarget = () => {
  return (
    <>
      {/* Session Target Section */}
      <div className="bg-gray-50 shadow-md rounded-lg p-4 mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Session, Target
        </h3>
        <p className="text-teal-600 mb-4 cursor-pointer">1 Target</p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-t border-b border-gray-200">
            <thead className="text-gray-400 text-sm">
              <tr>
                <th className="text-left py-2 px-4">Target Name</th>
                <th className="text-left py-2 px-4">Avg. Response Time</th>
                <th className="text-left py-2 px-4">90% Response Time</th>
                <th className="text-left py-2 px-4">Min Response Time</th>
                <th className="text-left py-2 px-4">Max Response Time</th>
                <th className="text-left py-2 px-4">Failed</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-sm">
              {[1, 2].map((_, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="py-3 px-4">google.com</td>
                  <td className="py-3 px-4">10 min</td>
                  <td className="py-3 px-4">10 min</td>
                  <td className="py-3 px-4">10 min</td>
                  <td className="py-3 px-4">10 min</td>
                  <td className="py-3 px-4">10 min</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Load Injectors Section in Separate Div */}
      <div className="mt-6">
        <LoadInjectors />
      </div>
    </>
  );
};

export default SessionTarget;

import React from "react";
import happyClientMobileData from "../json/HappyClient_Mobile.json";

const HappyClient_Mobile = () => {
  return (
    <section className="block md:hidden">
      <div>
        {/* Header (match your original hardcoded layout) */}
        <div className="text-center px-10">
          <h2 className="text-2xl font-semibold lg:w-full w-14 mx-auto mb-2">
            {happyClientMobileData.header.title}{" "}
            <span className="text-primary">
              {happyClientMobileData.header.titleHighlight}
            </span>
          </h2>

          <p className="text-black text-sm lg:w-full w-16 mx-auto mb-10">
            {happyClientMobileData.header.description}
          </p>
        </div>

        {/* Grid (match original padding) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 p-4 px-10 gap-4">
          {happyClientMobileData.cards.map((card) => (
            <div
              key={card.id}
              className="group p-0.5 rounded-xl bg-white hover:bg-[linear-gradient(135deg,#FBCD61_10.42%,#0E2925_100%)] transition"
            >
              <div className="p-6 rounded-xl bg-white h-full w-full">
                <div className="p-[2px] rounded-2xl bg-[linear-gradient(135deg,#FBCD61_10.42%,#0E2925_100%)] w-12 h-12 flex items-center justify-center mb-2">
                  <span className="bg-white rounded-xl w-full h-full flex items-center justify-center group-hover:bg-[linear-gradient(135deg,#FBCD61_10.42%,#0E2925_100%)] text-xl group-hover:text-white transition">
                    {card.number}
                  </span>
                </div>

                <h4 className="font-semibold text-xl w-[14rem] mb-2">
                  {card.title}
                </h4>

                <p className="text-secondary w-[14rem]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClient_Mobile;

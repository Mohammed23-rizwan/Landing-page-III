import img from "../assets/pexels-moh-adbelghaffar-771742.jpg";

const PersonDetails = ({ Users1 }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-1">
      {Users1.map((item) => {
        return (
          <div className="flex justify-center mt-4" key={item.id}>
            <div className="w-[95%] bg-white h-[170px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded">
              <div className="flex h-full justify-center items-center gap-4">
                <div className="w-[120px] h-[150px] relative">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover rounded"
                  />
                  <h2 className="absolute bottom-0 text-center w-full text-white">
                    Ethan &apos;Wills&apos;
                  </h2>
                </div>
                <div className="info">
                  <h2>{item.name}</h2>
                  <h2>{item.cat}</h2>
                  <table>
                    <tbody>
                      <tr>
                        <td>Doc : </td>
                        <td>{item.doc}</td>
                      </tr>
                      <tr>
                        <td>Status : </td>
                        <td>{item.status}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PersonDetails;

// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { IOpportunity } from "../Models/IOpportunity";
// import { toast } from "react-toastify";
// import Header from "../components/atoms/Header";
// import Backbutton from "../components/atoms/BackButton";
// import IndividualOpportunity from "src/components/molecules/IndividualOpportunity";
// import OpportunitiesClient from "../Api/opportunitiesClient";
// import { useSelector } from "react-redux";
// import { RootState } from "src/store";

// export default function IndividualOpportunityScreen() {
//   const [opportunity, setOpportunity] = useState<IOpportunity>();
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const { itemId } = useParams();
//   const navigate = useNavigate();
//   const user = useSelector((state: RootState) => state.user);

//   useEffect(() => {
//     async function getOpportunity() {
//       OpportunitiesClient.getById(itemId)
//         .then((res: IOpportunity) => {
//           setOpportunity(res);
//           setIsLoading(false);
//         })
//         .catch((error) => {
//           toast.error(error.response);
//           navigate("/opportunities");
//         });
//     }
//     getOpportunity();
//   }, []);

//   if (isLoading) {
//     return <p data-testid="test-p-loading">...Loading</p>;
//   }

//   return (
//     <>
//       <div
//         className="max-w-[calc(75rem+3rem)] mx-auto"
//         data-testid="test-div8">
//         <Header
//           page="individual-opportunity"
//           includePostButton={false}
//           includeEditButton={
//             user._id == opportunity.createdBy["_id"] ? true : false
//           }
//           includeDeleteButton={false}
//         />
//         <Backbutton />
//         <IndividualOpportunity data={opportunity} />
//       </div>
//     </>
//   );
// }

import { handleDispatch } from "../config/handle-dispatch";
// import appAction from "../ducks/app/actions";
import { basicInstance } from "../config/config";

export const postAdsService = handleDispatch(
  async (someObj, { adData, history }) => {
    const data = (
      await basicInstance.post("allAds", {
        ...adData,
        postedDate: Date.now(),
        imageUrl: "images/item.jpg",
        rating: 0,
        isPremium: true
      })
    ).data;
    history.push(`/item-details/${data.id}`);
  }
);

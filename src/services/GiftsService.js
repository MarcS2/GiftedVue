import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { Gift } from "../models/Gift"
import { AppState } from "../AppState"

class GiftsService {
  async getGifts() {
    const res = await api.get('api/gifts')
    const gotGifts = res.data.map(pojo => new Gift(pojo))
    AppState.gifts = gotGifts
  }
  async openGift(giftId) {
    await api.put(`api/gifts/${giftId}`, { opened: true })
    this.getGifts()
  }
}

export const giftsService = new GiftsService()
class PlaceholderService {
  public async getPlaceHolder(key: string): Promise<string> {
    const url = '/placeholder.json';
    const request = fetch(url);

    try {
      const response = await request;
      const responseClone = response.clone();
      const responseJson = await responseClone.json();
      const responseData = await responseJson.data;

      const errorObject = responseData.find((item) => item.Key === key);
      return errorObject.Text;
    } catch (error) {
      console.error('Error fetching placeholder data:', error);
      throw error;
    }
  }
}

export default new PlaceholderService();

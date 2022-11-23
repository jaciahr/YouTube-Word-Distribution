class PagesController < ApplicationController
  # def home
  #   video_id = "pMKsed-y744"
  #   @heart = `python3 lib/assets/python/heart.py "#{video_id}"`
  #   puts @heart.inspect
  #   puts @heart
  # end


  def get_youtube_data
    video_id = params[:youtube_id]
    @heart = `python3 lib/assets/python/heart.py "#{video_id}"`
    render json: @heart, status: :ok
  end
end

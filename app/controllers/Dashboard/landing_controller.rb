class Dashboard::LandingController < ApplicationController

    before_action :authenticate_user!
    
  def index
    render(inertia: "Dashboard", props: {
      message: "Hello Admin #{current_user.name}",
    })
  end


  private 
  
end
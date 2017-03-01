class Api::ClassNamesController < ApplicationController
  def index
    @class_names = ClassName.all
    render :index
  end

  def show
    @class_name = ClassName.find(params[:id])
    render :show
  end

end

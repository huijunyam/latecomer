class Api::StudentsController < ApplicationController
  def show
    @student = Student.find(params[:id])
    render :show
  end

  def index
    @students = Student.all
    render :index
  end
end

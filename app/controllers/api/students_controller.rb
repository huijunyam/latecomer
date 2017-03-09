class Api::StudentsController < ApplicationController
  def show
    @student = Student.find(params[:id])
    render :show
  end

  def index
    @students = Student.all
    render :index
  end

  def create
    @student = Student.new(student_params)
    if @student.save
      render "api/students/show"
    else
      render json: @student.errors.full_messages, status: 422
    end
  end

  def delete
    student = Student.find(params[:id])
    @class = student.class
    student.destroy 
    render "api/class_names/show"
  end
end

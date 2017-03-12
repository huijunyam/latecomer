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
    student = Student.new(student_params)
    if student.save
      @class_name = ClassName.find(student.class_id)
      render "api/class_names/show"
    else
      render json: student.errors.full_messages, status: 422
    end
  end

  def update
    @student = Student.find(params[:id])
    @student.dates = params[:student][:dates]
    if @student.update(student_params)
      @class_name = ClassName.find(@student.class_id);
      render "api/class_names/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    student = Student.find(params[:id])
    @class_name = student.classroom
    student.destroy
    render "api/class_names/show"
  end

  private
  def student_params
    params.require(:student).permit(
      :name, :lateness, :class_id
    )
  end
end

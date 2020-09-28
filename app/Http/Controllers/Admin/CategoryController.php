<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return view('admin.pages.categories.index',compact('categories'));
    }

    public function store(CategoryRequest $request)
    {

        Category::create($request->validated());

        return back()->with('success','Category Sucessfully added!');

    }

    public function update(Request $request, Category $category)
    {
        $category->update([
            'name' => $request->name
        ]);

        return back()->with('sucess','Category Successfully Updated!');

    }

    public function destroy($id)
    {
        Category::findOrFail($id)->delete();
        return response()->json('ok',200);
    }
}

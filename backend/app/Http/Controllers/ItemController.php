<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use Illuminate\Support\Carbon;


class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Item::orderBy('nome', 'DESC')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newItem = new Item;
        $newItem->nome = $request->item["nome"];
        $newItem->descricao = $request->item["descricao"];
        $newItem->save();

        return $newItem;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $itemExistente = Item::find($id);
        if($itemExistente){
            $itemExistente->descricao = $request->item['descricao'];
            $itemExistente->updated_at = Carbon::now();
            $itemExistente->save();
            return $itemExistente;
        }

        return "Item não encontrado";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $itemExistente = item::find($id);

        if($itemExistente){
            $itemExistente->delete();
            return "Item exclúido com sucesso";
        }
        
        return "Item não encontrado";
    }

}

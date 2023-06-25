<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use Illuminate\Support\Carbon;


class ItemController extends Controller
{
    
    public function index()
    {
        return Item::orderBy('updated_at', 'DESC')->get();
    }

    public function store(Request $request)
    {
        $newItem = new Item;
        $newItem->nome = $request->item["nome"];
        $newItem->descricao = $request->item["descricao"];
        $newItem->save();

        return $newItem;
    }

    public function update(Request $request, string $id)
    {
        $itemExistente = Item::find($id);
        if($itemExistente){
            $itemExistente->nome = $request->item['nome'];
            $itemExistente->descricao = $request->item['descricao'];
            $itemExistente->updated_at = Carbon::now();
            $itemExistente->save();
            return $itemExistente;
        }

        return "Item não encontrado";
    }

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

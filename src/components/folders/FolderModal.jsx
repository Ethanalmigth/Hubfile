import React from "react";

export default function FolderModal ({handlesubmit=()=>{},ref=()=>{}}) {
  return (
    <>
      <input
        type="checkbox"
        id="create-folder-modal"
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box bg-base-200">
          <h3 className="text-2xl font-bold text-base-content mb-6">
            Créer un nouveau dossier
          </h3>
          <form onSubmit={handlesubmit} ref={ref}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-base-content">
                  Titre du dossier
                </span>
              </label>
              <input
                type="text"
                placeholder="Ex: Dossier Alpha"
                name="nom"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text text-base-content">
                  Description
                </span>
              </label>
              <textarea
                placeholder="Décrivez votre dossier..."
                className="textarea textarea-bordered w-full"
                name="description"
              ></textarea>
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Créer
              </button>
              <label htmlFor="create-folder-modal" className="btn btn-outline">
                Annuler
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
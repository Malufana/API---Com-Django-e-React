import React, { useState } from 'react';

const getCSRFToken = () => {
    const csrfTokenElement = document.querySelector('[name=csrfmiddlewaretoken]');
    return csrfTokenElement ? csrfTokenElement.value : null;
};

function CsvUploadForm() {
  console.log("entrou");

  const [sensorFile, setSensorFile] = useState(null);
  const [luminosidadeFile, setLuminosidadeFile] = useState(null);
  const [temperaturaFile, setTemperaturaFile] = useState(null);
  const [umidadeFile, setUmidadeFile] = useState(null);
  const [contadorFile, setContadorFile] = useState(null);

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async(e, uploadType, file) => {
    e.preventDefault();

    // const file = e.target.files[0];
    if(!file){ //Esta verificando se o arquivo foi selecionado
        alert(`Nenhum arquivo selecionado para ${uploadType}`);
        console.log("NEnhuma arquivo selecionado");
        return;
    }

    const formData = new FormData();
    // formData.append(uploadType, file); //Adiciona o arquivo ao formData com uma chave correspondente ao tipo de upload
    formData.append('upload_type', uploadType);
    formData.append(uploadType + '_csv', file);

    fetch('http://localhost:8000/api/process-upload/', {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': getCSRFToken(),
        }
    })

    .then(response => {
        console.log('Responsta do servidor:', response);
        return response.json();
    })
    .then(data => {
        console.log('Upload realizado com sucesso:', data);
    })
    .catch(error => {
        console.log('Erro ao realizar upload:', error);
    });
  };

  return (
    <div style={styles.body}>
      <form
        action='/api/process-upload/'
        method="POST"
        encType="multipart/form-data"
        style={styles.form}
      >
        
        <h1>CSV UPLOAD</h1>
        <input type='hidden' name='csrfmiddlewaretoken' value="{{ csrf_token }}" />
        <div className="upload-section" style={styles.uploadSection}>
          <label htmlFor="sensor_csv">Upload Sensor CSV:</label>
          <input
            type="file"
            name="sensor_csv"
            id="sensor_csv"
            onChange={(e) => handleFileChange(e, setSensorFile)}
            style={styles.input}
          />
          <button
            type="submit"
            onClick={(e) => handleSubmit(e, 'sensor', sensorFile)}
            style={styles.button}
          >
            Upload Sensor
          </button>
        </div>

        <div className="upload-section" style={styles.uploadSection}>
          <label htmlFor="luminosidade_csv">Upload Luminosidade CSV:</label>
          <input
            type="file"
            name="luminosidade_csv"
            id="luminosidade_csv"
            onChange={(e) => handleFileChange(e, setLuminosidadeFile)}
            style={styles.input}
          />
          <button
            type="submit"
            onClick={(e) => handleSubmit(e, 'luminosidade', luminosidadeFile)}
            style={styles.button}
          >
            Upload Luminosidade
          </button>
        </div>

        <div className="upload-section" style={styles.uploadSection}>
          <label htmlFor="temperatura_csv">Upload Temperatura CSV:</label>
          <input
            type="file"
            name="temperatura_csv"
            id="temperatura_csv"
            onChange={(e) => handleFileChange(e, setTemperaturaFile)}
            style={styles.input}
          />
          <button
            type="submit"
            onClick={(e) => handleSubmit(e, 'temperatura', temperaturaFile)}
            style={styles.button}
          >
            Upload Temperatura
          </button>
        </div>

        <div className="upload-section" style={styles.uploadSection}>
          <label htmlFor="umidade_csv">Upload Umidade CSV:</label>
          <input
            type="file"
            name="umidade_csv"
            id="umidade_csv"
            onChange={(e) => handleFileChange(e, setUmidadeFile)}
            style={styles.input}
          />
          <button
            type="submit"
            onClick={(e) => handleSubmit(e, 'umidade', umidadeFile)}
            style={styles.button}
          >
            Upload Umidade
          </button>
        </div>

        <div className="upload-section" style={styles.uploadSection}>
          <label htmlFor="contador_csv">Upload Contador CSV:</label>
          <input
            type="file"
            name="contador_csv"
            id="contador_csv"
            onChange={(e) => handleFileChange(e, setContadorFile)}
            style={styles.input}
          />
          <button
            type="submit"
            onClick={(e) => handleSubmit(e, 'contador', contadorFile)}
            style={styles.button}
          >
            Upload Contador
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: '0',
  },
  form: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '300px',
  },
  uploadSection: {
    marginBottom: '20px',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
};

export default CsvUploadForm;

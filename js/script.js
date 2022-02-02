/* 
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) 
e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti:
 tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti
 i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” 
il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, 
l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato (vedi immagine in allegato)
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 
NOTE:
Ricordate di includere la proprietà visible nella nostra logica di ricerca
Sono a disposizione per i ticket fino alle 13 e nel pomeriggio i tutor saranno disponibili dalle 15 alle 18.
(modificato)
 */

Vue.config.devtools = true;

var root = new Vue({
    el: '#root',
    data:{
      userActive:0,
      textMessage:'',
      user: {
        name: 'Nome Utente',
        avatar: '_io'
      },
      contacts: [
        {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
          ],
        },
        {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [{
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'received'
          }
          ],
        },
        {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [{
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
          ],
        },
        {
          name: 'Luisa',
          avatar: '_4',
          visible: true,
          messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
          ],
        },
        {
          name: 'Giovanni',
          avatar: '_5',
          visible: true,
          messages: [{
            date: '28/03/2020 10:10:40',
            text: 'Ciao come stai?',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Io bene grazie e te ?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Potrebbe andare meglio',
            status: 'received'
          }
          ],
        },
        {
          name: 'Giuseppe',
          avatar: '_6',
          visible: true,
          messages: [{
            date: '28/03/2020 10:10:40',
            text: 'Ciao ci sei stasera?',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Scusa ma non riesco, possiamo fare prossimo venerdì',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Va bene! ci sentiamo',
            status: 'received'
          }
          ],
        },
        {
          name: 'Antonio',
          avatar: '_7',
          visible: true,
          messages: [{
            date: '28/03/2020 10:10:40',
            text: 'Ciao mi sono dimenticato la maglietta a casa tua!',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: "Ah si l' ho vista ora, appena ci vediamo te la porto",
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'ok!',
            status: 'received'
          }
          ],
        },
        {
          name: 'Marco',
          avatar: '_1',
          visible: true,
          messages: [{
            date: '28/03/2020 10:10:40',
            text: 'Ma domani ci sono le lezioni?',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Si lo sciopero è stato annullato',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Perfetto!',
            status: 'received'
          }
          ],
        },
        {
          name: 'Enrico',
          avatar: '_2',
          visible: true,
          messages: [{
            date: '28/03/2020 10:10:40',
            text: 'Ciao come va ?',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Bene bene grazie e te ?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Insomma',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Come mai che è successo?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'La macchina perchè non parte più!',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: "Speriamo sia nulla di grave in caso ci sono delle offerte fantastiche sull'elettrico",
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ok grazie del consiglio',
            status: 'received'
          },
          ],
        },
      ],
    },
    methods:
    {
      setActiveUser(index)
      {
        this.userActive = index;
      },
      sendMessage(text,status)
      {
        const objectMessage = {
          date: new Date().toLocaleString('it-IT'),
          text,
          status
        };

        this.contacts[this.userActive].messages.push(objectMessage); 
      },
      response()
      {
        this.sendMessage(this.textMessage,'sent')
        
         setTimeout(()=>{

          this.sendMessage('ok','received') 

         },3000);

         this.message = '';

      }

      
         
    } 
  });